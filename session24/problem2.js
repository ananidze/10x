// 2. Sorting Avengers (Truthy & Falsy Values)
// Story: Nick Fury is sorting Avengers based on availability.
// Task: Write a function availableAvengers(avengers) that:
// Takes an array of names and falsy values.
// Returns a new array with only truthy values.
// Example:
// console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));
// Output: ["Iron Man", "Thor"]

function availableAvengers(avengers) {
  return avengers.filter(Boolean);
}

console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));