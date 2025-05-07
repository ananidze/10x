// 6. One Piece Treasure Hunt (Boolean Coercion & Conditionals)
// Story: Luffy finds a treasure if the location contains a truthy value.
// Task: Write a function isTreasureSpot(content) that:
// Returns true if JavaScript treats content as truthy.
// Returns false otherwise.
// Example:
// console.log(isTreasureSpot("gold")); // true
// console.log(isTreasureSpot(0)); // false

function isTreasureSpot(content) {
  return !!content;
}

console.log(isTreasureSpot("gold"));
console.log(isTreasureSpot(0));