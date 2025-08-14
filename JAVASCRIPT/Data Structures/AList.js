function arrayToList(arr) { // convierte un array en una lista enlazada
  return arr.reduceRight((rest, value) => ({ value, rest }), null);
}
function listToArray(list) { // convierte una lista enlazada en un array
  let result = [];
  while (list) {
    result.push(list.value);
    list = list.rest;
  }
  return result;
}
const prepend = (value, rest) => ({ value, rest }); // agrega un nuevo elemento al principio de la lista
function nth(list, n) { // obtiene el n-ésimo elemento de una lista enlazada
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
