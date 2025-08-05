for (let i = 1; i <= 100; i++) { // crea un bucle de 1 a 100
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}
