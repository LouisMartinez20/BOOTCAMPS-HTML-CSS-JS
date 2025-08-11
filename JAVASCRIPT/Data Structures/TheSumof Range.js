function range(start, end, step = 1) {
  if (step === 0) throw new Error("El paso no puede ser 0");

  const length = Math.floor((end - start) / step) + 1;

  return Array.from({ length }, (_, i) => start + i * step);
}


function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));
