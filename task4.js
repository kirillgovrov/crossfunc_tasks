class Book {
    constructor (title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }

    showInfo() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}. The price is ${this.price}.\n`);
    }
}

let book1 = new Book ("Harry Potter", "J. Rowling", 1997, "50$");
let book2 = new Book ("The Lord of the Rings", "Tolkien", 1937, "70$");
let book3 = new Book ("1984", "Orwell", 1949, "30$");

book1.showInfo()
book2.showInfo()
book3.showInfo()