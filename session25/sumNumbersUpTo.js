// Task 3: Sum of Numbers (While Loop)
// Story: You’re a treasure hunter exploring an ancient cave. The cave has n golden coins scattered around. Use a while loop to calculate the total value of all the coins.
// Instructions: Write a function sumNumbersUpTo(n) that calculates the sum of numbers from 1 to n using a while loop.

function sumNumbersUpTo(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

sumNumbersUpTo(5); // Output: 15 (1 + 2 + 3 + 4 + 5)