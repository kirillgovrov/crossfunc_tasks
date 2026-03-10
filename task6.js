class Book {
    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }
}

class Library {
    books_arr = [];

    addBook(book) {
        this.books_arr.push(book);
    }

    removeBook(title) {
        for (let i = 0; i < this.books_arr.length; i++) {
            if (this.books_arr[i].title === title) {
                this.books_arr.splice(i, 1);
                console.log("\nResult after removing:")
                for (let i = 0; i < this.books_arr.length; i++) {
                    console.log(`Title: ${this.books_arr[i].title} | Author: ${this.books_arr[i].author} | Year: ${this.books_arr[i].year} | Price: ${this.books_arr[i].price}`)
                }
                break;
            }
        }
    }
    listAllBooks() {
        console.log("List of all books:");
        for (const book of this.books_arr) {
            console.log(`Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Price: ${book.price}`);
        }
    }
    searchByAuthor(author) {
        console.log("\nSearch result:");
        for (let i=0; i<this.books_arr.length; i++) {
            if (this.books_arr[i].author.toLowerCase().includes(author.toLowerCase())) {
                console.log(`Title: ${this.books_arr[i].title} | Author: ${this.books_arr[i].author} | Year: ${this.books_arr[i].year} | Price: ${this.books_arr[i].price}`);
            }
        }
    }
}

const library = new Library();
library.addBook(new Book("Harry Potter", "J. Rowling", 1997, "50$"));
library.addBook(new Book("The Lord of the Rings", "Tolkien", 1937, "70$"));
library.addBook(new Book("1984", "Orwell", 1949, "30$"));

library.listAllBooks();
library.removeBook("1984");
library.searchByAuthor("Tolkien");