// Virtual Assistant – Meet the User!
// Scenario: Create a virtual assistant that introduces itself

const person = {
  name: 'Alice',
  age: 25,

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet(); // Hello, my name is Alice and I am 25 years old.