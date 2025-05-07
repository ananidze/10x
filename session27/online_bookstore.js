// The Online Bookstore
// Scenario: Create a blueprint for storing book details

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('1984', 'George Orwell', 1949);

// Log book details
console.log(book1);
console.log(book2);