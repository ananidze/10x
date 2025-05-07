// 4. The Lost Treasure Map
// A pirate captain needs help finding treasure! Convert an array of directions into a list of formatted instructions using `map()`.
// Example input: `['left', 'right', 'forward']`
// Expected output: `['Move left', 'Move right', 'Move forward']`

function createInstructions(directions) {
  return directions.map(direction => `Move ${direction}`);
}

console.log(createInstructions(['left', 'right', 'forward']));