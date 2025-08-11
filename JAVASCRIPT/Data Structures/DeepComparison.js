function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a !== "object" ||
      b === null || typeof b !== "object") return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  return keysA.length === keysB.length &&
          keysA.every(key => keysB.includes(key) && deepEqual(a[key], b[key]));
}


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));  // true
console.log(deepEqual(obj, { here: 1, object: 2 })); // false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true
