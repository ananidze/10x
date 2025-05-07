// 4. Naruto’s Chakra Levels (Ternary Operator)
// Story: Naruto’s chakra determines his combat readiness.
// Task: Write a function checkChakra(level) that:
// Returns "Full Power" if level > 80.
// Returns "Still Fighting" if level >= 50.
// Returns "Need Ramen Recharge" otherwise.
// Example:
// console.log(checkChakra(90)); // "Full Power"
// console.log(checkChakra(60)); // "Still Fighting"
// console.log(checkChakra(30)); // "Need Ramen Recharge"

function checkChakra(level) {
  return level > 80 ? "Full Power" :
         level >= 50 ? "Still Fighting" :
         "Need Ramen Recharge";
}

console.log(checkChakra(90));
console.log(checkChakra(60));
console.log(checkChakra(30));