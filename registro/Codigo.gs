/**
 * Registro de ¿Con quién votas? (belmarfabian.github.io/con-quien-votas)
 * Al terminar cada ronda, el juego envía los votos y la afinidad de una partida, y este script los anota en la planilla.
 * No recibe ni guarda nombre, correo, IP ni ningún dato que identifique a la persona.
 * Solo tiene permiso sobre la planilla a la que está ligado.
 * @OnlyCurrentDoc
 */
var PROYECTOS = [{"id": "22244", "bol": "11179-13", "f": "2023-04-11", "tema": "Trabajo", "q": "¿Reducir la jornada laboral de 45 a 40 horas semanales?", "sala": "Aprobado 127–14–3"}, {"id": "33518", "bol": "15480-13", "f": "2024-01-24", "tema": "Pensiones", "q": "¿Crear un seguro social de pensiones financiado con una nueva cotización del empleador?", "sala": "Aprobado 84–64–3"}, {"id": "21236", "bol": "12093-08", "f": "2023-05-17", "tema": "Recursos naturales", "q": "¿Cobrar un royalty a la gran minería del cobre?", "sala": "Aprobado 101–24–3"}, {"id": "38703", "bol": "15170-05", "f": "2023-03-08", "tema": "Impuestos", "q": "¿Legislar una reforma tributaria que subía impuestos a las personas de mayores ingresos y creaba un impuesto al patrimonio?", "sala": "Rechazado 73–71–3"}, {"id": "88893", "bol": "18216-05", "f": "2026-05-20", "tema": "Impuestos", "q": "¿Rebajar el impuesto a las empresas de 27% a 23%?", "sala": "Aprobado 90–59–1"}, {"id": "83577", "bol": "16566-03", "f": "2025-07-01", "tema": "Economía", "q": "¿Simplificar y acelerar los permisos que el Estado exige a los proyectos de inversión?", "sala": "Aprobado 93–27–17"}, {"id": "20765", "bol": "13501-07", "f": "2020-07-08", "tema": "Pensiones", "q": "¿Permitir retirar el 10% de los fondos de pensiones durante la pandemia?", "sala": "Aprobado 95–25–31"}, {"id": "38824", "bol": "15896-11", "f": "2024-05-13", "tema": "Salud", "q": "¿Aprobar la ley corta de isapres, que les permite devolver en cuotas lo que deben a sus afiliados?", "sala": "Aprobado 122–14–10"}, {"id": "84199", "bol": "17169-04", "f": "2025-08-20", "tema": "Educación", "q": "¿Reemplazar el CAE por un nuevo financiamiento estatal y condonar parte de las deudas educativas?", "sala": "Aprobado 80–51–6"}, {"id": "89000", "bol": "18156-04", "f": "2026-06-02", "tema": "Educación", "q": "¿Permitir a los colegios revisar mochilas y endurecer las sanciones por violencia escolar?", "sala": "Aprobado 105–46–0"}, {"id": "89693", "bol": "16300-07", "f": "2026-08-11", "tema": "Seguridad", "q": "¿Extender la legítima defensa privilegiada a policías y militares que estén de franco?", "sala": "Aprobado 114–26–2"}, {"id": "88474", "bol": "17474-06", "f": "2026-03-24", "tema": "Migración", "q": "¿Restringir el acceso de inmigrantes en situación irregular a beneficios pagados por el Estado?", "sala": "Aprobado 95–48–7"}, {"id": "32562", "bol": "11422-07", "f": "2021-12-07", "tema": "Familia", "q": "¿Permitir el matrimonio entre personas del mismo sexo?", "sala": "Aprobado 82–20–2"}, {"id": "38694", "bol": "12038-34", "f": "2021-11-30", "tema": "Familia", "q": "¿Despenalizar el aborto consentido hasta las 14 semanas de gestación?", "sala": "Rechazado 62–65–1"}, {"id": "21518", "bol": "7736-11", "f": "2020-12-17", "tema": "Salud", "q": "¿Permitir la eutanasia para personas con una enfermedad terminal e incurable?", "sala": "Aprobado 79–54–5"}, {"id": "24702", "bol": "15614-07", "f": "2023-01-11", "tema": "Instituciones", "q": "¿Abrir un segundo proceso constitucional, con un Consejo electo y una comisión de expertos?", "sala": "Aprobado 109–37–2"}, {"id": "40316", "bol": "13212-07", "f": "2021-05-26", "tema": "Instituciones", "q": "¿Volver al voto obligatorio?", "sala": "Aprobado 107–16–23"}, {"id": "89107", "bol": "16725-06", "f": "2026-06-10", "tema": "Instituciones", "q": "¿Eliminar el feriado irrenunciable en los días de elecciones?", "sala": "Aprobado 87–54–2"}, {"id": "52693", "bol": "16553-12", "f": "2025-01-21", "tema": "Medio ambiente", "q": "¿Dar más facultades a la Superintendencia del Medio Ambiente para fiscalizar y sancionar?", "sala": "Aprobado 78–47–8"}, {"id": "42717", "bol": "14614-07", "f": "2024-12-04", "tema": "Seguridad", "q": "¿Crear un Ministerio de Seguridad Pública separado del Ministerio del Interior?", "sala": "Aprobado 91–28–6"}];
var PARTIDOS = [["PC", "Partido Comunista de Chile"], ["FA", "Frente Amplio"], ["PS", "Partido Socialista de Chile"], ["PPD", "Partido por la Democracia"], ["FRVS", "Federación Regionalista Verde Social"], ["PL", "Partido Liberal de Chile"], ["PR", "Partido Radical de Chile"], ["DC", "Partido Demócrata Cristiano"], ["EVOP", "Evolución Política"], ["PDG", "Partido de la Gente"], ["PCC", "Partido Cristiano de Chile"], ["RN", "Renovación Nacional"], ["PNL", "Partido Nacional Libertario"], ["UDI", "Unión Demócrata Independiente"], ["REP", "Partido Republicano"]];
var LEEME = [["tema", "explicación"], ["qué es", "Respuestas anónimas del juego ¿Con quién votas? (belmarfabian.github.io/con-quien-votas). No se guarda nombre, correo, IP ni ningún dato que identifique a la persona."], ["filas", "Cada fila es una vista de resultados. Si alguien responde cinco más, aparece otra fila con la misma partida y la ronda siguiente. Para analizar, usa la última fila de cada partida."], ["fecha", "Hora de llegada, según la zona horaria de esta planilla."], ["partida", "Código al azar creado al empezar cada partida. Sirve para unir rondas; no identifica a la persona."], ["ronda", "1 = primeras cinco preguntas; 2 = diez; 3 = quince; 4 = veinte."], ["ver_tablero", "1 si la persona eligió ver cómo votó cada partido después de cada proyecto; 0 si no."], ["votados", "Cantidad de votos a favor o en contra. «Paso» no cuenta."], ["top", "Partido con más afinidad (sigla). Si hay empate, las siglas van unidas con +."], ["orden", "Votaciones en el orden en que aparecieron."], ["v_<votación>", "Voto de la persona: 1 = a favor, -1 = en contra, 0 = paso, vacío = no le tocó. El detalle de cada votación está en la hoja proyectos."], ["af_<sigla>", "Afinidad con el partido, de 0 a 100. Vacío si hay menos de tres proyectos comparables. Los nombres están en la hoja partidos."], ["version", "Versión del registro."], ["pruebas", "Filas enviadas desde la página con ?prueba=1 al final de la dirección. No son respuestas reales."]];
var CABECERA = ['fecha', 'partida', 'ronda', 'ver_tablero', 'votados', 'top', 'orden']
  .concat(PROYECTOS.map(function (p) { return 'v_' + p.id; }))
  .concat(PARTIDOS.map(function (p) { return 'af_' + p[0]; }))
  .concat(['version']);

function doPost(e) {
  var texto = (e && e.postData && e.postData.contents) || '';
  if (texto.length > 8000) return salida_('muy largo');
  var d;
  try { d = JSON.parse(texto); } catch (err) { return salida_('no es json'); }
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var hoja = hoja_(d.prueba ? 'pruebas' : 'respuestas');
    var votos = d.votos || {}, af = d.afinidad || {};
    var fila = CABECERA.map(function (c) {
      if (c === 'fecha') return new Date();
      if (c.indexOf('v_') === 0) { var v = votos[c.slice(2)]; return v === 1 || v === -1 || v === 0 ? v : ''; }
      if (c.indexOf('af_') === 0) { var a = af[c.slice(3)]; return typeof a === 'number' && a >= 0 && a <= 100 ? Math.round(a) : ''; }
      if (c === 'orden') return limpio_((d.orden || []).join(' '), 300);
      var x = d[c];
      if (typeof x === 'number' && isFinite(x)) return x;
      return limpio_(x, 60);
    });
    hoja.appendRow(fila);
    return salida_('ok');
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return salida_('Registro de ¿Con quién votas? activo.');
}

/* solo letras, números y pocos signos; nunca empieza con un signo que la planilla lea como fórmula */
function limpio_(x, max) {
  return String(x == null ? '' : x).replace(/[^A-Za-z0-9+_. -]/g, '').replace(/^[=+@-]+/, '').slice(0, max);
}

function salida_(t) {
  return ContentService.createTextOutput(t);
}

function hoja_(nombre) {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var h = libro.getSheetByName(nombre);
  if (!h) { preparar(); h = libro.getSheetByName(nombre); }
  return h;
}

/* arma las hojas respuestas, pruebas, proyectos, partidos y léeme; no toca las que ya tienen datos */
function preparar() {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  function asegurar(nombre, filas, anchos) {
    var h = libro.getSheetByName(nombre) || libro.insertSheet(nombre);
    if (h.getLastRow() === 0) {
      var r = h.getRange(1, 1, filas.length, filas[0].length);
      r.setNumberFormat('@');
      r.setValues(filas);
      h.getRange(1, 1, 1, filas[0].length).setFontWeight('bold');
      h.setFrozenRows(1);
      (anchos || []).forEach(function (w, i) { if (w) h.setColumnWidth(i + 1, w); });
    }
    return h;
  }
  var resp = asegurar('respuestas', [CABECERA], [150, 140, 60, 90, 70, 90, 300]);
  var prue = asegurar('pruebas', [CABECERA], [150, 140, 60, 90, 70, 90, 300]);
  [resp, prue].forEach(function (h) { h.getRange('A2:A').setNumberFormat('yyyy-mm-dd hh:mm:ss'); h.getRange(2, 2, h.getMaxRows() - 1, CABECERA.length - 1).setNumberFormat('General'); });
  asegurar('proyectos', [['columna', 'votacion_id', 'boletin', 'fecha_sala', 'tema', 'pregunta', 'resultado_sala']]
    .concat(PROYECTOS.map(function (p) { return ['v_' + p.id, p.id, p.bol, p.f, p.tema, p.q, p.sala]; })), [80, 90, 90, 90, 130, 620, 170]);
  asegurar('partidos', [['columna', 'sigla', 'partido', 'orden_eje']]
    .concat(PARTIDOS.map(function (p, i) { return ['af_' + p[0], p[0], p[1], String(i + 1)]; })), [80, 60, 280, 80]);
  asegurar('léeme', LEEME, [110, 900]);
  var vacia = libro.getSheetByName('Hoja 1') || libro.getSheetByName('Sheet1');
  if (vacia && vacia.getLastRow() === 0 && libro.getSheets().length > 1) libro.deleteSheet(vacia);
}
