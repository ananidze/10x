/*
 * Time-Turner – Function Hoisting
 * 
 * Story:
 * Hermione Granger accidentally used the Time-Turner incorrectly, causing a function
 * to be called before it is even defined. Surprisingly, JavaScript allows this!
 */

turnBackTime();

function turnBackTime() {
  console.log("Going back in time!");
}