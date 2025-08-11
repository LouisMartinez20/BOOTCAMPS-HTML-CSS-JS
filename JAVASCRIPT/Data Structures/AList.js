function arrayToList(arr) {
  return arr.reduceRight((rest, value) => ({ value, rest }), null);
}
function listToArray(list) {
  let result = [];
  while (list) {
    result.push(list.value);
    list = list.rest;
  }
  return result;
}
const prepend = (value, rest) => ({ value, rest });
function nth(list, n) {
  return !list ? undefined : n === 0 ? list.value : nth(list.rest, n - 1);
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
