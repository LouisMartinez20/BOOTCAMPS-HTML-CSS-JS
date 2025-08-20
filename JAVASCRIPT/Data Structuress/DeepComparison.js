function deepEqual(a, b) {
  if (a === b) return true;   // Caso 1: Comparación estricta directa (primitivos y misma referencia)
  if (a === null || typeof a !== "object" || // Caso 2: Verificación de tipos para objetos
    b === null || typeof b !== "object") return false;
  let keysA = Object.keys(a); // Caso 3: Comparación de objetos
  let keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false; // Verificar misma cantidad de propiedades
  for (let i = 0; i < keysA.length; i++) {  // Comparar cada propiedad recursivamente
    let key = keysA[i];
    let found = false; // Verificar que la key exista en el segundo objeto
    for (let j = 0; j < keysB.length; j++) {
      if (keysB[j] === key) {
        found = true;
        break;
      }
    }
    if (!found || !deepEqual(a[key], b[key])) return false; // Si la key no existe o los valores no son iguales, retornar false
  }
  return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, { here: 1, object: 2 })); // false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true