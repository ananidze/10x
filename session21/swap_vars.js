let a = 3;
let b = 7;

const tmp = a;
a = b;
b = tmp;

console.log(`a: ${a}, b: ${b}`);

let x = 3;
let y = 7;

[x, y] = [y, x];
console.log(`x: ${x}, y: ${y}`);