
function reverseArray(arr) {
  return arr.reduce((reversed, value) => [value, ...reversed], []);
}


function reverseArrayInPlace(arr) {
  arr.forEach((_, i) => {
    if (i < arr.length / 2) {
      [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
  });
  return arr;
}

// Ejemplo:
console.log(reverseArray([1, 2, 3]));   
let arr = [1, 2, 3, 4];
reverseArrayInPlace(arr);
console.log(arr);                      
