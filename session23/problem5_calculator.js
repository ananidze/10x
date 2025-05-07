// Coding Challenge #5 Dynamic Calculator
// Write a function calculate(a, b, operator) that takes two numbers and an operator (+, -, *, /, %, **).
// Use a switch statement to perform the calculation.
// Handle division by zero properly.
// If an invalid operator is passed, return "Invalid operator"

// examples:

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    case '%':
      if (b === 0) {
        return "Error: Division by zero for modulo";
      }
      return a % b;
    case '**':
      return a ** b;
    default:
      return "Invalid operator";
  }
}

// Examples:
console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 - 5 =", calculate(10, 5, '-'));
console.log("10 * 5 =", calculate(10, 5, '*'));
console.log("10 / 5 =", calculate(10, 5, '/'));
console.log("10 / 0 =", calculate(10, 0, '/'));
console.log("10 % 3 =", calculate(10, 3, '%'));
console.log("10 % 0 =", calculate(10, 0, '%'));
console.log("2 ** 3 =", calculate(2, 3, '**'));
console.log("10 @ 5 =", calculate(10, 5, '@'));