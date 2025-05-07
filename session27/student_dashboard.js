// Student Dashboard
// Scenario: Create a student dashboard to display student information

const student = {
  name: 'John Doe',
  age: 20,
  grades: [85, 90, 78],

  displayInfo() {
    console.log('Student Information:');
    console.log(Object.entries(this));
  }
};

console.log('Keys:', Object.keys(student));
console.log('Values:', Object.values(student));

// Display all information
student.displayInfo();