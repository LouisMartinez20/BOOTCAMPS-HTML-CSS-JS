function every(array, test) {
  // Devuelve true si todos los elementos pasan el test.
  for (const element of array) {
    if (!test(element)) return false; 
  }
  return true; 
}
function every2(array, test) {
  const someMeet = array.some(element => !test(element));
  return !someMeet;// Usa some para verificar si hay algún elemento que no pasa el test
}
console.log(every([1, 3, 5], n => n < 10)); // → true
console.log(every([2, 4, 16], n => n < 10)); // → false
console.log(every2([], n => n < 10)); // → true