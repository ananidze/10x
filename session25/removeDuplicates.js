// Task 12: Modify Array While Looping
// Story: You’re a time traveler fixing a corrupted timeline. The timeline is represented as an array with duplicate events. Use loops to remove duplicates and restore the timeline.
// Instructions: Write a function removeDuplicates(arr) that removes duplicate elements from an array while looping through it. Be careful not to skip elements!

function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]