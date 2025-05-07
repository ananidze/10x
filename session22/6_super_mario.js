/*
 * Super Mario Power-Up – Function Expressions
 * 
 * Story:
 * Mario has just found a mysterious Super Mushroom, and he feels his jumping power doubling!
 * Write a function to calculate his new jump height after eating the mushroom.
 */

const powerUp = function(jumpHeight) {
  return jumpHeight * 2;
};

console.log(powerUp(5));