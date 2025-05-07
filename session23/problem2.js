// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 

// Your tasks: 
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
// Hint: Use an if/else statement

// Solution for Data 1
let massMark1 = 78; // kg
let heightMark1 = 1.69; // m
let massJohn1 = 92; // kg
let heightJohn1 = 1.95; // m

let bmiMark1 = massMark1 / (heightMark1 ** 2);
let bmiJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

console.log("Data 1:");
if (bmiMark1 > bmiJohn1) {
  console.log(`Mark's BMI (${bmiMark1.toFixed(1)}) is higher than John's (${bmiJohn1.toFixed(1)})!`);
} else if (bmiJohn1 > bmiMark1) {
  console.log(`John's BMI (${bmiJohn1.toFixed(1)}) is higher than Mark's (${bmiMark1.toFixed(1)})!`);
} else {
  console.log(`Mark and John have the same BMI (${bmiMark1.toFixed(1)})!`);
}

// Solution for Data 2
let massMark2 = 95; // kg
let heightMark2 = 1.88; // m
let massJohn2 = 85; // kg
let heightJohn2 = 1.76; // m

let bmiMark2 = massMark2 / (heightMark2 ** 2);
let bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

console.log("\nData 2:");
if (bmiMark2 > bmiJohn2) {
  console.log(`Mark's BMI (${bmiMark2.toFixed(1)}) is higher than John's (${bmiJohn2.toFixed(1)})!`);
} else if (bmiJohn2 > bmiMark2) {
  console.log(`John's BMI (${bmiJohn2.toFixed(1)}) is higher than Mark's (${bmiMark2.toFixed(1)})!`);
} else {
  console.log(`Mark and John have the same BMI (${bmiMark2.toFixed(1)})!`);
}