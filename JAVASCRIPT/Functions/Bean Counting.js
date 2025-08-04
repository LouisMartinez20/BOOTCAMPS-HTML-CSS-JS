function countChar(str, char) {
  let count = 0; // Inicializa el contador en 0
  for (let i = 0; i < str.length; i++) { // Recorre cada carácter de la cadena
    if (str[i] === char) { // Si el carácter actual es igual al carácter buscado
      count++; // Incrementa el contador
    }
  }
  return count; // Devuelve el contador final
}

function countBs(str) { // Función específica para contar 'B's
  return countChar(str, "B"); // Llama a countChar con 'B' como carácter a contar
}

console.log(countBs("BBaBC")); // resultado: 3
console.log(countBs("aabbcc")); // resultado: 0
console.log(countChar("kakkerlak", "k")); // resultado: 4
