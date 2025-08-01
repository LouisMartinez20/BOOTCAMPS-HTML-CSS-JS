let tamaño = 8; // Define el tamaño del tablero
let tablero = "";// Inicializa una cadena vacía para el tablero
// Utiliza un bucle anidado para crear el tablero de ajedrez
for (let y = 0; y < tamaño; y++) { // Itera sobre cada fila
  for (let x = 0; x < tamaño; x++) { // Itera sobre cada columna
    tablero += (x + y) % 2 === 0 ? " " : "#"; // Agrega un espacio si la suma de las coordenadas es par, o un "#" si es impar
  }
  tablero += "\n"; // Agrega un salto de línea al final de cada fila
}
console.log(tablero);