/*
 * Sorting the Sorting Hat – Callback Functions
 * 
 * Story:
 * The Sorting Hat at Hogwarts is about to sort new students into their houses, but it needs a helper function
 * to determine which house each student belongs to. The Sorting Hat is an old magical object, and instead of
 * choosing houses itself, it calls a separate function (a callback function) to decide where each student goes.
 */

function sortStudent(name, callback) {
  console.log(`Sorting ${name} into...`);
  return callback();
}

console.log(sortStudent("Harry", () => "Gryffindor"));

function chooseHouse() {
  const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  return houses[0];
}

// console.log(sortStudent("Ron", chooseHouse));