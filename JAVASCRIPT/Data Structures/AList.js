
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


const prepend = (value, list) => ({ value, rest: list });


function nth(list, n) {
  return !list ? undefined :
         n === 0 ? list.value :
         nth(list.rest, n - 1);
}


let lista = arrayToList([10, 20, 30]);
console.log(lista);
console.log(listToArray(lista));   // [10, 20, 30]
console.log(prepend(5, lista));    // { value: 5, rest: {...} }
console.log(nth(lista, 1));        // 20
