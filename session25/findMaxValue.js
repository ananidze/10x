// Task 7: Find Maximum Value (For...of Loop)
// Story: You’re a treasure hunter searching for the most valuable gem in a cave. The gems are stored in an array, and you need to find the one with the highest value. Use a for...of loop to solve this.
// Instructions: Write a function findMaxValue(numbers) that finds the maximum value in an array using a for...of loop.

function findMaxValue(numbers) {
  let max = -Infinity;
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

findMaxValue([10, 20, 5, 30]); // Output: 30