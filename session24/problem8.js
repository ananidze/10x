// 8. Loki’s Illusions (Object Comparison & Identity)
// Story: Loki creates magical duplicates of himself. The Avengers must check if two Loki instances are actually the same.
// Task: Write a function isSameLoki(loki1, loki2) that:
// Returns true if both objects reference the same instance.
// Returns false otherwise.
// Example:
// let lokiA = { name: "Loki" };
// let lokiB = { name: "Loki" };
// let lokiC = lokiA;
// 
// console.log(isSameLoki(lokiA, lokiB)); // false
// console.log(isSameLoki(lokiA, lokiC)); // true

function isSameLoki(loki1, loki2) {
  return loki1 === loki2;
}

let lokiA = { name: "Loki" };
let lokiB = { name: "Loki" };
let lokiC = lokiA;

console.log(isSameLoki(lokiA, lokiB));
console.log(isSameLoki(lokiA, lokiC));