// 1. The Sorting Hat (Harry Potter)
// Hogwarts needs a digital Sorting Hat! Create an array of student names and randomly assign them to one of the four houses using the `map()` method.
// Example input: `['Harry', 'Hermione', 'Ron', 'Draco']`
// Expected output: `['Harry - Gryffindor', 'Hermione - Ravenclaw', 'Ron - Gryffindor', 'Draco - Slytherin']`

const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];

function sortingHat(students) {
  return students.map(student => {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    return `${student} - ${randomHouse}`;
  });
}

console.log(sortingHat(['Harry', 'Hermione', 'Ron', 'Draco']));