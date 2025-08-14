let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// Usa reduce para unir todos los arrays en uno solo y concat para aplanar la estructura.