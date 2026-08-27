EXAMPREP — banco de preguntas de práctica
==========================================

CÓMO USARLO
-----------
1. Descomprime la carpeta "examprep" en tu computadora.
2. Haz doble clic en "index.html" para abrirlo con tu navegador
   (Chrome, Firefox, Edge, Safari, etc.). No necesita servidor ni
   instalación: todo funciona de forma local.

QUÉ INCLUYE
-----------
- index.html    -> estructura de la página
- styles.css    -> diseño visual (estética de "terminal")
- app.js        -> toda la lógica de la aplicación
- questions.js  -> el banco de preguntas, ya convertido a datos
                   (generado a partir de tu archivo preguntas.txt)

NOTA SOBRE LA CANTIDAD DE PREGUNTAS
------------------------------------
Tu archivo preguntas.txt contiene 125 preguntas numeradas del 1 al 125
(no 150 como se mencionó). Todas se importaron correctamente, incluyendo:
- Preguntas de opción única
- Preguntas de opción múltiple ("Elija dos/tres")
- Preguntas de "rellene el espacio en blanco"

FUNCIONES DE LA APP
--------------------
- Guía completa: las 125 preguntas con respuesta y explicación
  siempre visibles, con buscador y opción de marcar preguntas
  para repasar después (con una estrella ★).
- Examen de práctica: eliges cuántas preguntas (por defecto 60,
  hasta 125) y si quieres usar todo el banco o solo tus preguntas
  marcadas. Se seleccionan al azar, respondes una por una sin ver
  la solución, y al final obtienes tu puntaje con revisión
  pregunta por pregunta (tu respuesta vs. la correcta + explicación).
  También puedes repetir el examen solo con las que fallaste.
- Historial: guarda tus intentos anteriores (puntaje y fecha) para
  que puedas ver tu progreso.

Todo el progreso (preguntas marcadas e historial de exámenes) se
guarda únicamente en el navegador donde lo uses (localStorage). Si
cambias de navegador o de computadora, no se transfiere. Si quieres
reiniciar todo, puedes borrar el historial desde la pestaña
"./historial" o limpiar los datos del sitio en tu navegador.

PERSONALIZAR
------------
Si más adelante actualizas tu banco de preguntas, puedo regenerar
questions.js a partir del nuevo preguntas.txt sin tocar el resto de
la app.
