for (let i = 1; i <= 100; i++) { //crea un bucle de 1 a 100
  let output = "";
  if (i % 3 === 0) output += "Fizz"; // si es divisible por 3, agrega "Fizz"
  if (i % 5 === 0) output += "Buzz"; // si es divisible por 5, agrega "Buzz"
  console.log(output || i); // si no es divisible por ninguno, imprime el número
}