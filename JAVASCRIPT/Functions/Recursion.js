function isEven(n) {
    n = Math.abs(n); // Asegura que n sea positivo
    if (n === 0) { // caso base: si n es 0, es par
        return true; // devuelve true
    } else if (n === 1) { // caso base: si n es 1, es impar
        return false; // devuelve false
    } else { // caso recursivo: si n es mayor que 1
        return isEven(n - 2); // caso recursivo: llama a isEven con n reducido en 2
    }
}

console.log(isEven(50)); // resultado: true
console.log(isEven(75)); // resultado: false
console.log(isEven(-2)); // resultado: true
