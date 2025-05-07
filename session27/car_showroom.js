// Car Showroom Database
// Scenario: Create a simple database for cars

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022,

  getInfo() {
    return `${this.brand} ${this.model}, ${this.year}`;
  }
};

console.log(car.getInfo()); // Toyota Corolla, 2022

car.year = 2023;
console.log(car.getInfo()); // Toyota Corolla, 2023

delete car.model;
console.log(car); // { brand: 'Toyota', year: 2023 }