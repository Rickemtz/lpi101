// Convierte 102-500_Preguntas_Respuestas_Descripcion.md al formato de questions.js
// Uso: node tools/md-a-questions-102.js Examenes/102-500-preguntas-respuestas.md questions-102.js
const fs = require("fs");
const [, , inPath, outPath] = process.argv;
const md = fs.readFileSync(inPath, "utf8");

// Markdown -> texto plano legible (la app escapa HTML y usa white-space: pre-line)
function plain(text) {
  return text
    .replace(/```[a-z]*\n([\s\S]*?)```/g, (_, code) => code.replace(/\n$/, ""))
    .replace(/^> ?/gm, "")
    .replace(/^- /gm, "• ")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1$2")
    .replace(/``(.+?)``/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Opciones reconstruidas para la pregunta 79 (en el original solo se conservó el primer número de cada una)
const OVERRIDES = {
  79: {
    options: {
      A: "1 5 10 15 20",
      B: "1 6 11 16",
      C: "1 2 3 4 5",
      D: "2 7 12 17",
      E: "5 10 15 20",
    },
    explanationPrefix: "Nota: las opciones A, C, D y E se reconstruyeron para el simulador a partir del primer número que conservaba el original.",
  },
};

const blocks = md.split(/^## Pregunta (\d+)\s*$/m).slice(1);
const bank = [];
for (let i = 0; i < blocks.length; i += 2) {
  const id = Number(blocks[i]);
  const body = blocks[i + 1].replace(/\n---\s*$/, "").trim();

  const ansMatch = body.match(/^\*\*Respuesta:\*\*\s*(.+)$/m);
  if (!ansMatch) throw new Error(`Pregunta ${id}: sin respuesta`);
  const head = body.slice(0, ansMatch.index);
  const tail = body.slice(ansMatch.index + ansMatch[0].length);

  const fill = /^\*Rellenar el espacio en blanco\*$/m.test(head);
  const options = {};
  const questionParts = [];
  const notes = [];
  for (const chunk of head.split(/\n{2,}(?![^`]*```)/)) {
    const c = chunk.trim();
    if (!c || /^\*Rellenar el espacio en blanco\*$/.test(c)) continue;
    if (/^- [A-F]\. /.test(c)) {
      for (const line of c.split("\n")) {
        const m = line.match(/^- ([A-F])\. (.+)$/);
        if (m) options[m[1]] = plain(m[2]);
      }
    } else if (/^> /.test(c)) {
      // Las notas sobre material que falta (antes de las opciones) se muestran con el enunciado
      if (!Object.keys(options).length && !/duplicado/.test(c)) questionParts.push("(" + plain(c) + ")");
      else notes.push(plain(c));
    } else {
      questionParts.push(plain(c));
    }
  }

  let answer;
  if (fill) {
    answer = plain(ansMatch[1]);
  } else {
    answer = ansMatch[1].replace(/\(.*\)/, "").replace(/[^A-F]/g, "");
    if (!answer) throw new Error(`Pregunta ${id}: respuesta no válida`);
    for (const l of answer) if (!options[l]) throw new Error(`Pregunta ${id}: falta la opción ${l}`);
  }

  const explanation = [
    ...notes,
    plain(tail.replace(/^\s*\*\*Explicación[^*]*\*\*\s*/m, "")),
  ].filter(Boolean).join("\n\n");

  const q = {
    id,
    question: (fill ? "RELLENE EL ESPACIO EN BLANCO: " : "") + questionParts.join("\n").replace(/\n{2,}/g, "\n"),
    options: fill ? {} : options,
    answer,
    explanation,
  };
  const ov = OVERRIDES[id];
  if (ov) {
    q.options = ov.options;
    q.explanation = ov.explanationPrefix + "\n\n" + q.explanation;
  }
  bank.push(q);
}

const out =
  "// Banco de preguntas LPIC-1 102-500 generado desde 102-500_Preguntas_Respuestas_Descripcion.md\n" +
  "const QUESTION_BANK_102 = " + JSON.stringify(bank, null, 2) + ";\n";
fs.writeFileSync(outPath, out);
console.log(`${bank.length} preguntas escritas en ${outPath}`);
