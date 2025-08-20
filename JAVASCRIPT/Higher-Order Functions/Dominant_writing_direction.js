// Datos de ejemplo: scripts con nombre, rangos Unicode y dirección
const SCRIPTS = [
  { name: "Latin", ranges: [[65, 91], [97, 123]], direction: "ltr" },
  { name: "Arabic", ranges: [[1536, 1792]], direction: "rtl" },
  { name: "Mongolian", ranges: [[6144, 6319]], direction: "ttb" }
];
// Busca el script al que pertenece un código Unicode
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(function(range) { // Usa some para verificar si el código está en algún rango.
      var from = range[0];
      var to = range[1];
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
// Cuenta elementos agrupados por el resultado de groupName
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name === name); // Usa find para buscar si ya existe el grupo.
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
}
// Determina la dirección dominante de escritura de un texto
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
    }).filter(function(item) { return item.name !== "none"; });// Usa filter para quitar los elementos 'none'.
  if (counted.length === 0) return "ltr"; // valor por defecto
  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}
// Ejemplos de uso
console.log(dominantDirection("Hello!"));                // → ltr
console.log(dominantDirection("Hey, مساء الخير"));      // → rtl
console.log(dominantDirection("ᠮᠣᠩᠭᠤᠯᠤ script test")); // → ttb
