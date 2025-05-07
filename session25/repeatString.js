// Task 4: Repeat a String (Do...While Loop)
// Story: You’re a wizard casting a spell to create a magical shield. The spell requires you to repeat an incantation n times. Use a do...while loop to ensure the spell is cast correctly.
// Instructions: Write a function repeatString(str, n) that repeats a string n times using a do...while loop.

function repeatString(str, n) {
  let result = '';
  let i = 0;
  do {
    result += str;
    i++;
  } while (i < n);
  return result;
}

repeatString("Hello", 3); // Output: HelloHelloHello