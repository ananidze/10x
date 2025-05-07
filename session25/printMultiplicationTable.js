// Task 11: Nested Loops: Multiplication Table
// Story: You’re a math wizard creating a magical multiplication table for your spellbook. Use nested for loops to generate the table up to n.
// Instructions: Write a function printMultiplicationTable(n) that prints the multiplication table up to n using nested for loops.

function printMultiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += `${i}x${j}=${i * j} `;
    }
    console.log(row);
  }
}

printMultiplicationTable(5); // Output: 1x1=1, 1x2=2, ..., 5x5=25