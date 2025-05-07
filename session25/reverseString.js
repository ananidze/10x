// Task 8: Reverse a String (While Loop)
// Story: You’re a spy decoding a secret message. The message is encrypted in reverse, and you need to use a while loop to decode it.
// Instructions: Write a function reverseString(str) that reverses a string using a while loop.

function reverseString(str) {
  let reversed = '';
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}

reverseString("Hello"); // Output: olleH