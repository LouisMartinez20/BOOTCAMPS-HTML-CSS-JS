function deepEqual(a, b) { // compara dos valores, incluyendo objetos y arrays
  if (a === b) return true;
  if (a === null || typeof a !== "object" ||
      b === null || typeof b !== "object") return false;
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let i = 0; i < keysA.length; i++) {
    let key = keysA[i];
    // Verifica que key exista en b y compara recursivamente
    let found = false;
    for (let j = 0; j < keysB.length; j++) {
      if (keysB[j] === key) {
        found = true;
        break;
      }
    }
    if (!found || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, {here: 1, object: 2})); // false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // true