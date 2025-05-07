// Coding Challenge #7 Bank Transaction System
// Write a function processTransaction(balance, amount, transactionType) that:
// If transactionType === "withdraw" and amount <= balance, deduct the amount and return the new balance.
// If transactionType === "withdraw" but amount > balance, return "Insufficient funds".
// If transactionType === "deposit", add the amount and return the new balance.
// If transactionType is neither "withdraw" nor "deposit", return "Invalid transaction type".
// examples:

function processTransaction(balance, amount, transactionType) {
  if (transactionType === "withdraw") {
    if (amount <= balance) {
      return balance - amount;
    } else {
      return "Insufficient funds";
    }
  } else if (transactionType === "deposit") {
    return balance + amount;
  } else {
    return "Invalid transaction type";
  }
}

// Examples:
console.log("Initial balance: 100");
let balance = 100;

console.log("Withdraw 50:", balance = processTransaction(balance, 50, "withdraw")); // 50
console.log("Withdraw 70 (insufficient):", processTransaction(balance, 70, "withdraw")); // Insufficient funds
console.log("Current balance:", balance);

console.log("Deposit 30:", balance = processTransaction(balance, 30, "deposit")); // 80
console.log("Current balance:", balance);

console.log("Invalid transaction 'transfer':", processTransaction(balance, 20, "transfer")); // Invalid transaction type
console.log("Current balance:", balance);