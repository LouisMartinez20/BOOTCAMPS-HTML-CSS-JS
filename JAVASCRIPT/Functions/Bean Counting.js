function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) { // Itera sobre cada carácter de la cadena
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBaBC"));
console.log(countBs("aabbcc"));
console.log(countChar("kakkerlak", "k"));
