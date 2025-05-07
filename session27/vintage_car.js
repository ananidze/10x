// Vintage Car Age Calculator
// Scenario: Create a system to calculate vintage car age

function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

Car.prototype.age = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year;
};

const car1 = new Car('Ford', 1967);
console.log(car1.age()); // Current year - 1967

const car2 = new Car('Chevrolet', 1955);
console.log(car2.age()); // Current year - 1955