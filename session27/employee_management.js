// Employee Management System
// Scenario: Create an employee management system with managers

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `Name: ${this.name}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
  }
}

const emp = new Employee('John', 50000);
console.log(emp.getDetails()); // Name: John, Salary: 50000

const mgr = new Manager('Alice', 70000, 'Engineering');
console.log(mgr.getDetails()); // Name: Alice, Salary: 70000, Department: Engineering