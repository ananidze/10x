// Coding Challenge #6 Triangle Type Detector
// Write a function triangleType(a, b, c) that:
// Returns "Equilateral" if all three sides are equal.
// Returns "Isosceles" if exactly two sides are equal.
// Returns "Scalene" if all three sides are different.
// Returns "Not a triangle" if the sides do not form a valid triangle (i.e., the sum of any two sides must be greater than the third).

// examples:

function triangleType(a, b, c) {
  // Check for valid triangle first
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a triangle";
  }

  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || a === c || b === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

// Examples:
console.log("3, 3, 3:", triangleType(3, 3, 3)); // Equilateral
console.log("3, 4, 4:", triangleType(3, 4, 4)); // Isosceles
console.log("4, 3, 4:", triangleType(4, 3, 4)); // Isosceles
console.log("4, 4, 3:", triangleType(4, 4, 3)); // Isosceles
console.log("3, 4, 5:", triangleType(3, 4, 5)); // Scalene
console.log("1, 2, 5:", triangleType(1, 2, 5)); // Not a triangle
console.log("5, 1, 2:", triangleType(5, 1, 2)); // Not a triangle
console.log("1, 5, 2:", triangleType(1, 5, 2)); // Not a triangle
console.log("0, 0, 0:", triangleType(0, 0, 0)); // Not a triangle
console.log("-1, 2, 2:", triangleType(-1, 2, 2)); // Not a triangle