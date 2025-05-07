// 7. Doctor Strange’s Multiverse Passcode (Coercion & Quirky Comparisons)
// Story: Doctor Strange needs a passcode that JavaScript considers equal under coercion but not strict equality.
// Task: Write a function strangePasscode(code1, code2) that:
// Returns true if code1 == code2 but false if code1 === code2.
// Hint: Use JavaScript quirks with null, undefined, false, 0, and empty strings.
// Example:
// console.log(strangePasscode(null, undefined)); // true
// console.log(strangePasscode("0", 0)); // true
// console.log(strangePasscode(0, false)); // true
// console.log(strangePasscode(0, 0)); // false

function strangePasscode(code1, code2) {
  return code1 == code2 && code1 !== code2;
}

console.log(strangePasscode(null, undefined));
console.log(strangePasscode("0", 0));
console.log(strangePasscode(0, false));
console.log(strangePasscode(0, 0));