let size = 8;
let board = "";
for (let y = 0; y < size; y++) { // Itera sobre cada fila
  for (let x = 0; x < size; x++) {
    board += (x + y) % 2 === 0 ? " " : "#";
  }
  board += "\n";
}
console.log(board);