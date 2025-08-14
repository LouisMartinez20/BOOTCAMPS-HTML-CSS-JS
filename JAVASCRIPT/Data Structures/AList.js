function arrayToList(array) {
  let lista = null;
  for (let i = array.length - 1; i >= 0; i--) {
    
    lista = {
      value: array[i],
      rest: lista
    };
  }
  return lista;
}
function listToArray(lista) {
  let array = [];
  let nodoActual = lista;
  while (nodoActual !== null) {
    array.push(nodoActual.value);
    nodoActual = nodoActual.rest;
  }
  return array;
}
function prepend(valor, lista) {
  return {
    value: valor,
    rest: lista
  };
}
function nth(lista, posicion) {
  let nodoActual = lista;
  let contador = 0;
  while (nodoActual !== null) {
    if (contador === posicion) {
      return nodoActual.value;
    }
    nodoActual = nodoActual.rest;
    contador++;
  }
  
  return undefined;
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));