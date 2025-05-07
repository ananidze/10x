// 9. Matrix Reloaded: Data Processing
// A hacker needs to process data from the Matrix. Given an array of numbers, transform each into binary format using `map()`, and then find the highest value using `reduce()`.
// Example input: `[3, 7, 15, 22]`
// Expected output (binary conversion): `['11', '111', '1111', '10110']`
// Expected output (highest value): `22`

function processMatrixData(numbers) {
  const binaryNumbers = numbers.map(num => num.toString(2));
  const highestValue = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
  return { binaryNumbers, highestValue };
}

const result = processMatrixData([3, 7, 15, 22]);
console.log('Binary conversion:', result.binaryNumbers);
console.log('Highest value:', result.highestValue);