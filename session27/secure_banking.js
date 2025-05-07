// Secure Banking System
// Scenario: Create a secure online banking system

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Insufficient funds');
      return;
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000

account.withdraw(500);
console.log(account.getBalance()); // 500

account.withdraw(600); // Insufficient funds
console.log(account.getBalance()); // 500