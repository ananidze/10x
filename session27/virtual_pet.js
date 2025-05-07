// Virtual Pet Adoption Center
// Scenario: Create a class for animals with basic details

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log('Animal sound');
  }
}

const pet = new Animal('Buddy', 'Dog');
pet.makeSound(); // Animal sound