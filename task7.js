const fs = require("fs");

class Book {
    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }
}

function saveBooks(books) {
    let text = "";
    for (const value of books) {
        text += `Title= ${value.title}\n`;
        text += `Author= ${value.author}\n`;
        text += `Year= ${value.year}\n`;
        text += `Price= ${value.price}\n\n`;
    } 
    fs.writeFileSync("books.txt", text);
}

function loadBooks() {
    const data = fs.readFileSync("books.txt", "utf8");
    const blocks = data.trim().split("\n\n");
    let loadedBooks = [];
  
    for (let value of blocks) {
      const lines = value.split("\n");
  
      const title = lines[0].split("=")[1];
      const author = lines[1].split("=")[1];
      const year = parseInt(lines[2].split("=")[1]);
      const price = lines[3].split("=")[1];
      
      const book = new Book(title, author, year, price);
      
      loadedBooks.push(book);
    }
    return loadedBooks;
}

const books = [
    new Book("Harry Potter", "J. Rowling", 1997, "50$"),
    new Book("The Lord of the Rings", "Tolkien", 1937, "70$"),
    new Book("1984", "Orwell", 1949, "30$")
];

saveBooks(books);

const loadedBooks = loadBooks();

console.log(loadedBooks);