// Task 10: FizzBuzz with a Twist
// Story: You’re a wizard participating in a magical tournament. The tournament rules are based on the FizzBuzz game, but with a twist! Use loops to print numbers from 1 to 50 with special rules.
// Instructions: Write a function fizzBuzzTwist() that prints numbers from 1 to 50 with the following rules:
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number contains the digit 3 (e.g., 13, 23), print "Almost Fizz".

function fizzBuzzTwist() {
  for (let i = 1; i <= 50; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i.toString().includes('3')) output = 'Almost Fizz';
    console.log(output || i);
  }
}

fizzBuzzTwist(); // Output: 1, 2, Almost Fizz, 4, FizzBuzz, ..., 49, Buzz