// Task 9: Validate User Input (Do...While Loop)
// Story: You’re a gatekeeper guarding a magical portal. The portal only opens if the user enters a number between 1 and 10. Use a do...while loop to keep asking until the user provides a valid input.
// Instructions: Write a function getValidInput() that repeatedly asks the user for a number between 1 and 10 using prompt(). The function should only stop when a valid input is given.

function getValidInput() {
  let userInput;
  do {
    userInput = Number(prompt('Enter a number between 1 and 10:'));
  } while (isNaN(userInput) || userInput < 1 || userInput > 10);
  return userInput;
}

getValidInput(); // Keeps asking until a number between 1 and 10 is entered