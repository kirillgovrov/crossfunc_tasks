# Cross Functional JavaScript Tasks

This repository contains code for 7 JavaScript tasks:

## [Task 1: Personal Information Formatter](task1.js)
Create a method that:
- Takes name, age, and city as variables
- Outputs a formatted sentence using a format string

**Example:**  

Alice (age 22) lives in Berlin.


## [Task 2: Simple Unit Converter](task2.js)
Write a program that converts:
- Celsius ↔ Fahrenheit
- Kilometres ↔ Miles

Use variables, arithmetic operations, and formatted output.

## [Task 3: Grading System](task3.js)
Given a score (0–100), output:
- A (100-90)
- B (89–80)
- C (79–70)
- D (69–60)
- F (below 60) based on range

Use chained conditions (`else if`) or `switch-case`.

## [Task 4: Book Class](task4.js)
Create a `Book` class with fields:
- title
- author
- year
- price

Create multiple `Book` objects and display them.

## [Task 5: Bank Account Encapsulation](task5.js)
Create class `BankAccount` with:
- private fields: balance, owner
- public methods: deposit(), withdraw(), getBalance()

Demonstrate:
- Preventing negative withdrawals
- Using getters/setters

## [Task 6: Library Inventory Using Lists](task6.js)
Use a `List<Book>` to store books. Implement functions:
- addBook(Book book)
- removeBook(String title)
- listAllBooks()
- searchByAuthor(String author)

Use loops and formatted strings to print results.

## [Task 7: Save Objects to a File](task7.js)
Serialize a list of `Book` or `Student` objects into a text file in simple format:  

Title=...  
Author=...  
Year=...


Later, read the file back and recreate objects.
