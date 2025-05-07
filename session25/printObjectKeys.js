// Task 5: Iterate Over Object Properties (For...in Loop)
// Story: You’re a detective investigating a mysterious object. The object has hidden properties, and you need to uncover them using a for...in loop.
// Instructions: Write a function printObjectKeys(obj) that prints all the keys of an object using a for...in loop.

function printObjectKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

printObjectKeys({ name: "Alice", age: 25 }); // Output: name, age