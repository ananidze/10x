// Coding Challenge #3 
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 

// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 

// Test data: 
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Solution for Data 1
console.log("Data 1:");
const scoreDolphins1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = (88 + 91 + 110) / 3;
console.log("Dolphins average score:", scoreDolphins1.toFixed(2));
console.log("Koalas average score:", scoreKoalas1.toFixed(2));

if (scoreDolphins1 > scoreKoalas1) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas1 > scoreDolphins1) {
  console.log("Koalas win the trophy!");
} else {
  console.log("It's a draw!");
}

// Solution for Data Bonus 1
console.log("\nData Bonus 1:");
const scoreDolphinsB1 = (97 + 112 + 101) / 3;
const scoreKoalasB1 = (109 + 95 + 123) / 3;
console.log("Dolphins average score (Bonus 1):", scoreDolphinsB1.toFixed(2));
console.log("Koalas average score (Bonus 1):", scoreKoalasB1.toFixed(2));

if (scoreDolphinsB1 > scoreKoalasB1 && scoreDolphinsB1 >= 100) {
  console.log("Dolphins win the trophy (Bonus 1)!");
} else if (scoreKoalasB1 > scoreDolphinsB1 && scoreKoalasB1 >= 100) {
  console.log("Koalas win the trophy (Bonus 1)!");
} else if (scoreDolphinsB1 === scoreKoalasB1 && scoreDolphinsB1 >= 100 && scoreKoalasB1 >= 100) {
  console.log("It's a draw, both win a trophy (Bonus 1)!");
} else {
  console.log("No team wins the trophy (Bonus 1).");
}

// Solution for Data Bonus 2
console.log("\nData Bonus 2:");
const scoreDolphinsB2 = (97 + 112 + 101) / 3;
const scoreKoalasB2 = (109 + 95 + 106) / 3;
console.log("Dolphins average score (Bonus 2):", scoreDolphinsB2.toFixed(2));
console.log("Koalas average score (Bonus 2):", scoreKoalasB2.toFixed(2));

if (scoreDolphinsB2 > scoreKoalasB2 && scoreDolphinsB2 >= 100) {
  console.log("Dolphins win the trophy (Bonus 2)!");
} else if (scoreKoalasB2 > scoreDolphinsB2 && scoreKoalasB2 >= 100) {
  console.log("Koalas win the trophy (Bonus 2)!");
} else if (scoreDolphinsB2 === scoreKoalasB2 && scoreDolphinsB2 >= 100 && scoreKoalasB2 >= 100) {
  console.log("It's a draw, both win a trophy (Bonus 2)!");
} else {
  console.log("No team wins the trophy (Bonus 2).");
}