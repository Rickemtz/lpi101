/* ============================================================
   examprep — lógica de la aplicación
   Banco de preguntas: QUESTION_BANK (definido en questions.js)
   ============================================================ */

(function () {
  "use strict";

  const TOTAL_QUESTIONS = QUESTION_BANK.length;
  const DEFAULT_EXAM_SIZE = Math.min(60, TOTAL_QUESTIONS);
  const PASS_THRESHOLD = 0.70; // referencia informativa, no oficial

  const LS_MARKED = "examprep_marked_v1";
  const LS_HISTORY = "examprep_history_v1";

  const viewRoot = document.getElementById("viewRoot");
  const termPath = document.getElementById("termPath");
  const footerCount = document.getElementById("footerCount");
  const navButtons = document.querySelectorAll(".term-nav-btn");

  footerCount.textContent = TOTAL_QUESTIONS;

  /* ---------------- persistence helpers ---------------- */

  function loadMarked() {
    try {
      const raw = localStorage.getItem(LS_MARKED);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (e) {
      return new Set();
    }
  }

  function saveMarked(set) {
    try {
      localStorage.setItem(LS_MARKED, JSON.stringify([...set]));
    } catch (e) { /* almacenamiento no disponible */ }
  }

  function loadHistory() {
    try {
      const raw = localStorage.getItem(LS_HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveHistory(list) {
    try {
      localStorage.setItem(LS_HISTORY, JSON.stringify(list));
    } catch (e) { /* almacenamiento no disponible */ }
  }

  /* ---------------- app state ---------------- */

  const state = {
    view: "home",
    marked: loadMarked(),
    history: loadHistory(),
    guia: { query: "", filter: "all", openId: null },
    examConfig: { size: DEFAULT_EXAM_SIZE, scope: "all" },
    exam: null, // { questions, answers, index, startedAt }
    lastResult: null,
  };

  /* ---------------- utilities ---------------- */

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function isFillBlank(q) {
    return !q.options || Object.keys(q.options).length === 0;
  }

  function isMultiSelect(q) {
    return !isFillBlank(q) && q.answer.length > 1;
  }

  function optionLetters(q) {
    return Object.keys(q.options).sort();
  }

  function normalize(str) {
    return String(str)
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // quita acentos
  }

  function formatDate(ts) {
    const d = new Date(ts);
    return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" }) +
      " " + d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  }

  /* ---------------- routing ---------------- */

  function setView(view) {
    state.view = view;
    render();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.view;
      if (target === "examen-config" && state.exam) {
        // si hay un examen en curso, ir a él en vez de reconfigurar
        setView("examen-run");
      } else {
        setView(target);
      }
    });
  });

  function syncNav() {
    navButtons.forEach((btn) => {
      const v = btn.dataset.view;
      const active = v === state.view || (v === "examen-config" && (state.view === "examen-run" || state.view === "examen-resultados"));
      if (active) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    });
    const pathMap = {
      home: "~/examprep",
      guia: "~/examprep/guia-completa",
      "examen-config": "~/examprep/examen",
      "examen-run": "~/examprep/examen --en-curso",
      "examen-resultados": "~/examprep/examen/resultados",
      historial: "~/examprep/historial",
    };
    termPath.textContent = pathMap[state.view] || "~/examprep";
  }

  /* ============================================================
     VIEW: HOME
     ============================================================ */

  function renderHome() {
    const attempts = state.history.length;
    const best = attempts ? Math.max(...state.history.map((h) => h.percentage)) : null;
    const markedCount = state.marked.size;

    viewRoot.innerHTML = `
      <section class="hero">
        <div class="hero-eyebrow">banco de preguntas listo · ${TOTAL_QUESTIONS} preguntas</div>
        <h1>Prepara tu examen <span class="accent">línea por línea</span>.</h1>
        <p>Repasa las ${TOTAL_QUESTIONS} preguntas del temario a tu ritmo, o simula un examen aleatorio de ${DEFAULT_EXAM_SIZE} preguntas con corrección y explicación al final.</p>
      </section>

      <div class="stat-row">
        <div class="stat-card"><div class="num">${TOTAL_QUESTIONS}</div><div class="label">preguntas en el banco</div></div>
        <div class="stat-card"><div class="num">${attempts}</div><div class="label">exámenes realizados</div></div>
        <div class="stat-card"><div class="num">${best !== null ? best + "%" : "—"}</div><div class="label">mejor puntaje</div></div>
        <div class="stat-card"><div class="num">${markedCount}</div><div class="label">preguntas marcadas</div></div>
      </div>

      <div class="mode-grid">
        <button class="mode-card" id="goGuia">
          <span class="cmd">guia --completa</span>
          <h3>Guía de estudio completa</h3>
          <p>Las ${TOTAL_QUESTIONS} preguntas con respuesta y explicación siempre visibles. Busca por palabra clave y marca las que quieras repasar.</p>
          <span class="go">abrir guía →</span>
        </button>
        <button class="mode-card" id="goExamen">
          <span class="cmd">examen --preguntas ${DEFAULT_EXAM_SIZE} --aleatorio</span>
          <h3>Examen de práctica</h3>
          <p>Elige cuántas preguntas quieres (hasta ${TOTAL_QUESTIONS}), respóndelas sin ver la solución y obtén tu puntaje con revisión al final.</p>
          <span class="go">configurar examen →</span>
        </button>
        ${attempts ? `
        <button class="mode-card" id="goHistorial">
          <span class="cmd">historial --ver</span>
          <h3>Historial de intentos</h3>
          <p>Revisa tus ${attempts} intento(s) anteriores y compara tu progreso examen a examen.</p>
          <span class="go">ver historial →</span>
        </button>` : ""}
      </div>
    `;

    document.getElementById("goGuia").addEventListener("click", () => setView("guia"));
    document.getElementById("goExamen").addEventListener("click", () => setView("examen-config"));
    const hb = document.getElementById("goHistorial");
    if (hb) hb.addEventListener("click", () => setView("historial"));
  }

  /* ============================================================
     VIEW: GUIA COMPLETA (modo estudio)
     ============================================================ */

  function questionMatchesQuery(q, query) {
    if (!query) return true;
    const hay = normalize(q.question + " " + Object.values(q.options).join(" ") + " " + q.explanation);
    return hay.includes(normalize(query));
  }

  function renderGuia() {
    const { query, filter } = state.guia;

    let list = QUESTION_BANK;
    if (filter === "marked") list = list.filter((q) => state.marked.has(q.id));
    list = list.filter((q) => questionMatchesQuery(q, query));

    viewRoot.innerHTML = `
      <div class="view-heading">
        <h2>Guía completa</h2>
        <span class="pill-count">${list.length} / ${TOTAL_QUESTIONS} preguntas</span>
      </div>
      <p class="view-sub">Todas las preguntas del banco con la respuesta correcta resaltada y su explicación. Usa la marca ★ para guardar preguntas que quieras repasar después.</p>

      <div class="toolbar">
        <input type="text" class="search-input" id="guiaSearch" placeholder="Buscar por palabra clave, comando o tema…" value="${escapeHtml(query)}">
        <button class="chip ${filter === "all" ? "is-active" : ""}" data-filter="all">todas</button>
        <button class="chip ${filter === "marked" ? "is-active" : ""}" data-filter="marked">marcadas (${state.marked.size})</button>
      </div>

      <div class="q-list" id="qList">
        ${list.length ? list.map(renderStudyCard).join("") : `<div class="empty-state">No hay preguntas que coincidan con tu búsqueda.</div>`}
      </div>
    `;

    document.getElementById("guiaSearch").addEventListener("input", (e) => {
      state.guia.query = e.target.value;
      renderGuia();
      // devolver el foco al buscador tras el re-render
      const el = document.getElementById("guiaSearch");
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    });

    viewRoot.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.guia.filter = btn.dataset.filter;
        renderGuia();
      });
    });

    viewRoot.querySelectorAll(".q-card-head").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        state.guia.openId = state.guia.openId === id ? null : id;
        renderGuia();
      });
    });

    viewRoot.querySelectorAll(".mark-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.id);
        if (state.marked.has(id)) state.marked.delete(id);
        else state.marked.add(id);
        saveMarked(state.marked);
        renderGuia();
      });
    });
  }

  function renderStudyCard(q) {
    const isOpen = state.guia.openId === q.id;
    const isMarked = state.marked.has(q.id);
    const fill = isFillBlank(q);
    const multi = isMultiSelect(q);

    let body = "";
    if (isOpen) {
      if (fill) {
        body = `<div class="fill-answer">Respuesta: ${escapeHtml(q.answer)}</div>`;
      } else {
        const correctSet = new Set(q.answer.split(""));
        body = `<ul class="opt-list">
          ${optionLetters(q).map((letter) => `
            <li class="opt-item ${correctSet.has(letter) ? "is-correct" : ""}">
              <span class="opt-letter">${letter}.</span>
              <span>${escapeHtml(q.options[letter])}</span>
            </li>
          `).join("")}
        </ul>`;
      }
      if (q.explanation) {
        body += `<div class="explain"><span class="explain-label">Explicación</span>${escapeHtml(q.explanation)}</div>`;
      }
    }

    return `
      <div class="q-card ${isOpen ? "is-open" : ""} ${isMarked ? "is-marked" : ""}">
        <button class="q-card-head" data-id="${q.id}">
          <span class="q-num">#${q.id}</span>
          <span class="q-text">
            ${escapeHtml(q.question)}
            ${fill ? '<span class="badge" style="margin-left:8px;">rellenar</span>' : ""}
            ${multi ? `<span class="badge badge-multi" style="margin-left:8px;">elegir ${q.answer.length}</span>` : ""}
          </span>
          <button class="mark-btn ${isMarked ? "is-active" : ""}" data-id="${q.id}" title="Marcar para repasar" aria-label="Marcar para repasar">${isMarked ? "★" : "☆"}</button>
          <span class="chev">›</span>
        </button>
        <div class="q-card-body">${body}</div>
      </div>
    `;
  }

  /* ============================================================
     VIEW: CONFIGURAR EXAMEN
     ============================================================ */

  function renderExamenConfig() {
    const cfg = state.examConfig;
    const pool = cfg.scope === "marked" ? [...state.marked] : QUESTION_BANK.map((q) => q.id);
    const maxAvailable = cfg.scope === "marked" ? state.marked.size : TOTAL_QUESTIONS;

    if (cfg.size > maxAvailable) cfg.size = Math.max(1, maxAvailable);

    viewRoot.innerHTML = `
      <div class="view-heading"><h2>Configurar examen</h2></div>
      <p class="view-sub">Elige el alcance y la cantidad de preguntas. Se seleccionarán al azar del banco y se presentarán una por una, sin mostrar la respuesta hasta el final.</p>

      <div class="config-panel">
        <div class="config-field">
          <label>Origen de las preguntas</label>
          <div class="chip-row">
            <button class="chip ${cfg.scope === "all" ? "is-active" : ""}" data-scope="all">Todo el banco (${TOTAL_QUESTIONS})</button>
            <button class="chip ${cfg.scope === "marked" ? "is-active" : ""}" data-scope="marked" ${state.marked.size === 0 ? "disabled" : ""}>Solo marcadas (${state.marked.size})</button>
          </div>
        </div>

        <div class="config-field">
          <label>Número de preguntas: <span class="range-value" id="sizeLabel">${cfg.size}</span></label>
          <div class="range-row">
            <input type="range" id="sizeRange" min="1" max="${maxAvailable || 1}" value="${cfg.size}">
          </div>
          <div class="chip-row" style="margin-top:10px;">
            ${[10, 30, 60, maxAvailable].filter((n, i, arr) => n > 0 && n <= maxAvailable && arr.indexOf(n) === i).map((n) => `<button class="chip" data-quick="${n}">${n}</button>`).join("")}
          </div>
        </div>

        <button class="btn btn-primary" id="startExam" ${maxAvailable === 0 ? "disabled" : ""}>▶ iniciar examen</button>
      </div>
    `;

    viewRoot.querySelectorAll("[data-scope]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        cfg.scope = btn.dataset.scope;
        renderExamenConfig();
      });
    });

    const range = document.getElementById("sizeRange");
    const label = document.getElementById("sizeLabel");
    range.addEventListener("input", () => {
      cfg.size = Number(range.value);
      label.textContent = cfg.size;
    });

    viewRoot.querySelectorAll("[data-quick]").forEach((btn) => {
      btn.addEventListener("click", () => {
        cfg.size = Number(btn.dataset.quick);
        renderExamenConfig();
      });
    });

    document.getElementById("startExam").addEventListener("click", () => startExam());
  }

  function startExam() {
    const cfg = state.examConfig;
    const pool = cfg.scope === "marked" ? QUESTION_BANK.filter((q) => state.marked.has(q.id)) : QUESTION_BANK;
    const selected = shuffle(pool).slice(0, Math.min(cfg.size, pool.length));

    state.exam = {
      questions: selected,
      answers: {}, // id -> Set(letters) o string
      index: 0,
      startedAt: Date.now(),
    };
    setView("examen-run");
  }

  /* ============================================================
     VIEW: EXAMEN EN CURSO
     ============================================================ */

  function renderExamenRun() {
    const exam = state.exam;
    if (!exam) { setView("examen-config"); return; }

    const total = exam.questions.length;
    const idx = exam.index;
    const q = exam.questions[idx];
    const fill = isFillBlank(q);
    const multi = isMultiSelect(q);
    const answeredCount = Object.keys(exam.answers).length;
    const currentAnswer = exam.answers[q.id];

    let optionsHtml = "";
    if (fill) {
      const val = typeof currentAnswer === "string" ? currentAnswer : "";
      optionsHtml = `
        <div class="fill-input-row">
          <input type="text" id="fillInput" placeholder="Escribe tu respuesta…" value="${escapeHtml(val)}" autocomplete="off">
        </div>
      `;
    } else {
      const selectedSet = currentAnswer instanceof Set ? currentAnswer : new Set();
      optionsHtml = `
        <ul class="exam-options">
          ${optionLetters(q).map((letter) => `
            <li class="exam-opt ${selectedSet.has(letter) ? "is-selected" : ""}" data-letter="${letter}">
              <input type="${multi ? "checkbox" : "radio"}" name="opt" ${selectedSet.has(letter) ? "checked" : ""} readonly>
              <span class="opt-letter">${letter}.</span>
              <span>${escapeHtml(q.options[letter])}</span>
            </li>
          `).join("")}
        </ul>
      `;
    }

    viewRoot.innerHTML = `
      <div class="exam-progress-bar">
        <span>${idx + 1} / ${total}</span>
        <div class="exam-progress-track"><div class="exam-progress-fill" style="width:${((idx + 1) / total) * 100}%"></div></div>
        <span>${answeredCount} respondidas</span>
      </div>

      <div class="exam-question">
        <span class="q-tag">${fill ? "rellene el espacio" : multi ? `elige ${q.answer.length} opciones` : "elige una opción"}</span>
        <h3>${escapeHtml(q.question)}</h3>
      </div>

      ${optionsHtml}

      <div class="exam-nav">
        <button class="btn btn-ghost" id="prevBtn" ${idx === 0 ? "disabled" : ""}>← anterior</button>
        <div class="exam-nav-right">
          <button class="btn btn-ghost" id="quitBtn">salir sin terminar</button>
          ${idx === total - 1
            ? `<button class="btn btn-primary" id="finishBtn">finalizar examen ✓</button>`
            : `<button class="btn btn-primary" id="nextBtn">siguiente →</button>`}
        </div>
      </div>
    `;

    if (fill) {
      const input = document.getElementById("fillInput");
      input.addEventListener("input", () => {
        exam.answers[q.id] = input.value;
      });
    } else {
      viewRoot.querySelectorAll(".exam-opt").forEach((li) => {
        li.addEventListener("click", () => {
          const letter = li.dataset.letter;
          let set = exam.answers[q.id];
          if (!(set instanceof Set)) set = new Set();
          if (multi) {
            if (set.has(letter)) set.delete(letter); else set.add(letter);
          } else {
            set = new Set([letter]);
          }
          exam.answers[q.id] = set;
          renderExamenRun();
        });
      });
    }

    const prevBtn = document.getElementById("prevBtn");
    if (prevBtn) prevBtn.addEventListener("click", () => { exam.index--; renderExamenRun(); });

    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.addEventListener("click", () => { exam.index++; renderExamenRun(); });

    const finishBtn = document.getElementById("finishBtn");
    if (finishBtn) finishBtn.addEventListener("click", () => finishExam());

    document.getElementById("quitBtn").addEventListener("click", () => {
      if (confirm("¿Salir del examen sin terminar? Se perderá el progreso de este intento.")) {
        state.exam = null;
        setView("examen-config");
      }
    });
  }

  function gradeQuestion(q, userAnswer) {
    if (isFillBlank(q)) {
      const given = typeof userAnswer === "string" ? userAnswer : "";
      return normalize(given) === normalize(q.answer) && given.trim() !== "";
    }
    const correctSet = new Set(q.answer.split(""));
    const givenSet = userAnswer instanceof Set ? userAnswer : new Set();
    if (givenSet.size !== correctSet.size) return false;
    for (const l of givenSet) if (!correctSet.has(l)) return false;
    return true;
  }

  function finishExam() {
    const exam = state.exam;
    const details = exam.questions.map((q) => {
      const userAnswer = exam.answers[q.id];
      const correct = gradeQuestion(q, userAnswer);
      return { q, userAnswer, correct };
    });
    const score = details.filter((d) => d.correct).length;
    const total = details.length;
    const percentage = Math.round((score / total) * 100);

    const result = {
      id: Date.now(),
      date: Date.now(),
      score, total, percentage,
      pass: percentage >= Math.round(PASS_THRESHOLD * 100),
      details, // solo en memoria para revisión inmediata
    };

    state.lastResult = result;
    state.history.unshift({
      id: result.id, date: result.date, score, total, percentage, pass: result.pass,
    });
    saveHistory(state.history);
    state.exam = null;
    setView("examen-resultados");
  }

  /* ============================================================
     VIEW: RESULTADOS
     ============================================================ */

  function renderResultados() {
    const result = state.lastResult;
    if (!result) { setView("home"); return; }

    const wrong = result.details.filter((d) => !d.correct);

    viewRoot.innerHTML = `
      <div class="results-hero">
        <div class="results-score ${result.pass ? "is-pass" : "is-fail"}">${result.percentage}<small>%</small></div>
        <div class="results-verdict">${result.score} de ${result.total} correctas · ${result.pass ? "por encima del umbral de referencia (70%)" : "por debajo del umbral de referencia (70%)"}</div>
      </div>

      <div class="toolbar">
        <button class="btn btn-primary" id="retryAll">repetir con nuevas preguntas</button>
        ${wrong.length ? `<button class="btn" id="retryWrong">repasar solo las ${wrong.length} falladas</button>` : ""}
        <button class="btn btn-ghost" id="backHome">volver al inicio</button>
      </div>

      <div class="view-heading"><h2>Revisión</h2><span class="pill-count">${wrong.length} incorrectas de ${result.total}</span></div>

      <div class="results-breakdown">
        ${result.details.map((d) => renderResultRow(d)).join("")}
      </div>
    `;

    document.getElementById("retryAll").addEventListener("click", () => setView("examen-config"));
    document.getElementById("backHome").addEventListener("click", () => setView("home"));
    const retryWrongBtn = document.getElementById("retryWrong");
    if (retryWrongBtn) {
      retryWrongBtn.addEventListener("click", () => {
        state.exam = {
          questions: shuffle(wrong.map((d) => d.q)),
          answers: {},
          index: 0,
          startedAt: Date.now(),
        };
        setView("examen-run");
      });
    }

    viewRoot.querySelectorAll(".result-row-head").forEach((btn) => {
      btn.addEventListener("click", () => {
        const body = btn.nextElementSibling;
        if (body) body.style.display = body.style.display === "block" ? "none" : "block";
      });
    });
  }

  function describeUserAnswer(q, userAnswer) {
    if (isFillBlank(q)) {
      return userAnswer && String(userAnswer).trim() ? escapeHtml(userAnswer) : "(sin responder)";
    }
    const set = userAnswer instanceof Set ? userAnswer : new Set();
    if (set.size === 0) return "(sin responder)";
    return [...set].sort().map((l) => `${l}. ${escapeHtml(q.options[l])}`).join(" · ");
  }

  function describeCorrectAnswer(q) {
    if (isFillBlank(q)) return escapeHtml(q.answer);
    return q.answer.split("").sort().map((l) => `${l}. ${escapeHtml(q.options[l])}`).join(" · ");
  }

  function renderResultRow(d) {
    const { q, userAnswer, correct } = d;
    return `
      <div class="result-row ${correct ? "is-right" : "is-wrong"}">
        <div class="result-row-head" style="cursor:pointer;">
          <span class="badge ${correct ? "badge-success" : "badge-danger"}">${correct ? "✓" : "✕"}</span>
          <div style="flex:1;">
            <div><strong>#${q.id}</strong> ${escapeHtml(q.question)}</div>
            ${!correct ? `<div class="yr-answer">Tu respuesta: ${describeUserAnswer(q, userAnswer)}</div>` : ""}
            ${!correct ? `<div class="correct-answer">Respuesta correcta: ${describeCorrectAnswer(q)}</div>` : ""}
          </div>
        </div>
        <div class="explain" style="display:none; padding-left:0; border-top:1px dashed var(--border-soft); margin-top:12px;">
          <span class="explain-label">Explicación</span>${escapeHtml(q.explanation || "Sin explicación disponible.")}
        </div>
      </div>
    `;
  }

  /* ============================================================
     VIEW: HISTORIAL
     ============================================================ */

  function renderHistorial() {
    const list = state.history;
    viewRoot.innerHTML = `
      <div class="view-heading"><h2>Historial de exámenes</h2>${list.length ? `<button class="btn btn-ghost" id="clearHistory">borrar historial</button>` : ""}</div>
      <p class="view-sub">Guardado localmente en este navegador — no se sincroniza ni se envía a ningún servidor.</p>
      ${list.length ? `
        <div class="history-list">
          ${list.map((h) => `
            <div class="history-row">
              <span class="h-score ${h.pass ? "is-pass" : "is-fail"}">${h.percentage}%</span>
              <span class="h-meta">${h.score} / ${h.total} correctas</span>
              <span class="h-date">${formatDate(h.date)}</span>
            </div>
          `).join("")}
        </div>
      ` : `<div class="empty-state">Aún no has realizado ningún examen.<br><br><button class="btn btn-primary" id="goExamFromHistory">iniciar mi primer examen</button></div>`}
    `;
    const clearBtn = document.getElementById("clearHistory");
    if (clearBtn) clearBtn.addEventListener("click", () => {
      if (confirm("¿Borrar todo el historial de exámenes?")) {
        state.history = [];
        saveHistory(state.history);
        renderHistorial();
      }
    });
    const goExam = document.getElementById("goExamFromHistory");
    if (goExam) goExam.addEventListener("click", () => setView("examen-config"));
  }

  /* ============================================================
     RENDER DISPATCH
     ============================================================ */

  function render() {
    syncNav();
    switch (state.view) {
      case "home": return renderHome();
      case "guia": return renderGuia();
      case "examen-config": return renderExamenConfig();
      case "examen-run": return renderExamenRun();
      case "examen-resultados": return renderResultados();
      case "historial": return renderHistorial();
      default: return renderHome();
    }
  }

  render();
})();
