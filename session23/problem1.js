// Coding Challenge #1 
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 

// Your tasks: 
// 1. Store Mark's and John's mass and height in variables 
// 2. Calculate both their BMIs using the formula (you can even implement both versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

// Test data: 
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// Solution for Data 1
let massMark1 = 78; // kg
let heightMark1 = 1.69; // m
let massJohn1 = 92; // kg
let heightJohn1 = 1.95; // m

let bmiMark1 = massMark1 / (heightMark1 ** 2);
let bmiJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

let markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log("Data 1:");
console.log("Mark's BMI:", bmiMark1);
console.log("John's BMI:", bmiJohn1);
console.log("Is Mark's BMI higher than John's?", markHigherBMI1);

// Solution for Data 2
let massMark2 = 95; // kg
let heightMark2 = 1.88; // m
let massJohn2 = 85; // kg
let heightJohn2 = 1.76; // m

let bmiMark2 = massMark2 / (heightMark2 ** 2);
let bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

let markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log("\nData 2:");
console.log("Mark's BMI:", bmiMark2);
console.log("John's BMI:", bmiJohn2);
console.log("Is Mark's BMI higher than John's?", markHigherBMI2);