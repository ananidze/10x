// 5. Jedi Academy: Light vs. Dark Side (Comparison & Logical Operators)
// Story: A Jedi can become a master only if their wisdom is high and anger is low.
// Task: Write a function isJediMaster(angerLevel, wisdomLevel) that:
// Returns true if angerLevel < 30 and wisdomLevel > 70.
// Returns false otherwise.
// Example:
// console.log(isJediMaster(20, 80)); // true
// console.log(isJediMaster(50, 90)); // false

function isJediMaster(angerLevel, wisdomLevel) {
  return angerLevel < 30 && wisdomLevel > 70;
}

console.log(isJediMaster(20, 80));
console.log(isJediMaster(50, 90));