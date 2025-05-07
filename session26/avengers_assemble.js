// 3. Avengers Assemble (Reduce)
// The Avengers need funding. Use the `reduce()` method to sum up the total budget required for each Avenger's mission.
// Example input: `[ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ]`
// Expected output: `Total budget: 7000`

function calculateTotalBudget(avengers) {
  return avengers.reduce((total, avenger) => total + avenger.budget, 0);
}

console.log(calculateTotalBudget([
  {hero: 'Iron Man', budget: 5000},
  {hero: 'Hulk', budget: 2000}
]));