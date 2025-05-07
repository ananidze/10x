/*
 * This file contains exercises 4-12. Each exercise is clearly marked with comments.
 * You can copy each exercise section into its own file as follows:
 * - 4_jedi_training.js
 * - 5_gollum_precious.js
 * - 6_super_mario.js
 * - 7_naruto_shadow_clone.js
 * - 8_sorting_hat.js
 * - 9_infinity_gauntlet.js
 * - 10_time_turner.js
 * - 11_batman_identity.js
 * - 12_enchanted_mirror.js
 */

/* ========== 4. Jedi Training – Default Parameters ========== */
function trainJedi(name, strength = 50) {
  return `${name} has ${strength} Power`;
}

console.log(trainJedi("Luke", 100));
console.log(trainJedi("Rey"));

/* ========== 5. Gollum's Precious – String Manipulation ========== */
function gollumSays(phrase) {
  return `${phrase}... ${phrase}... ${phrase}...`;
}

console.log(gollumSays("My precious"));

/* ========== 6. Super Mario Power-Up – Function Expressions ========== */
const powerUp = function(jumpHeight) {
  return jumpHeight * 2;
};

console.log(powerUp(5));

/* ========== 7. Naruto's Shadow Clone Jutsu – Arrow Functions ========== */
const shadowClone = (count) => `${count * 5} clones created!`;

console.log(shadowClone(10));

/* ========== 8. Sorting the Sorting Hat – Callback Functions ========== */
function sortStudent(name, callback) {
  console.log(`Sorting ${name} into...`);
  return callback();
}

console.log(sortStudent("Harry", () => "Gryffindor"));

/* ========== 9. Infinity Gauntlet – Function Scope ========== */
function snapFingers() {
  const stones = 6;
  
  function checkStones() {
    console.log(`Thanos has ${stones} stones. The universe trembles!`);
  }
  
  checkStones();
}

snapFingers();

/* ========== 10. Time-Turner – Function Hoisting ========== */
// Calling the function before it's defined
turnBackTime();

// Function declaration is hoisted to the top
function turnBackTime() {
  console.log("Going back in time!");
}

// This works because in JavaScript, function declarations are hoisted to the top of their scope,
// which means they can be called before they appear in the code.

/* ========== 11. Batman's Secret Identity – Function Closures ========== */
function batman() {
  // Inner function that has access to the parent scope
  function revealIdentity() {
    return "I am Batman!";
  }
  
  // Return the inner function
  return revealIdentity;
}

// Store the result of batman() (which is the inner function) in a variable
const whoIsBatman = batman();

// Call the inner function
console.log(whoIsBatman());

/* ========== 12. The Enchanted Mirror – Higher-Order Functions ========== */
function magicMirror(message, transformFunction) {
  // Apply the transformation function to the message
  const transformedMessage = transformFunction(message);
  
  return `The mirror says: ${transformedMessage}`;
}

// Call the function with a message and a transformation function
console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));