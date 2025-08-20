function range(start, end, step = 1) { // crea un array con un rango de numeros si el step es negativo cuenta hacia atras
  if (step === 0) throw new Error("El paso no puede ser 0");
  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}
function sum(numbers) { // suma los elementos de un array
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));