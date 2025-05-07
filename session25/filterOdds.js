// Task 6: Filter Odd Numbers (For Loop)
// Story: You’re a scientist analyzing a dataset of numbers. Your task is to filter out all the even numbers to focus on the odd ones. Use a for loop to achieve this.
// Instructions: Write a function filterOdds(numbers) that removes all even numbers from an array using a for loop.

function filterOdds(numbers) {
  const odds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      odds.push(numbers[i]);
    }
  }
  return odds;
}

filterOdds([1, 2, 3, 4, 5]); // Output: [1, 3, 5]