// Task 2: Iterate Over an Array (For...of Loop)
// Story: You’re a chef preparing a fruit salad for a royal banquet. The king has given you a list of fruits, and you need to display each one on a golden platter. Use a for...of loop to print each fruit from the array.
// Instructions: Write a function printArrayElements(arr) that prints each element of an array using a for...of loop.

function printArrayElements(arr) {
  for (const element of arr) {
    console.log(element);
  }
}

printArrayElements(["Apple", "Banana", "Cherry"]); // Output: Apple, Banana, Cherry