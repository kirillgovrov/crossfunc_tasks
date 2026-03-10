class BankAccount {
    #owner;
    #balance;

    constructor (owner) {
        this.#owner = owner;
        this.#balance = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Deposit must be positive.");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw must be positive.");
            return;
        }
        if (this.#balance < amount) {
            console.log("Not enough money");
            return;
        }
        this.#balance -= amount;
        console.log(`Withdrawn: ${amount}`)
    }

    getBalance() {
        return this.#balance;
    }

    get owner() {
        return this.#owner;
    }

    set owner(newOwner) {
        if (typeof newOwner === "string" && newOwner.length > 0) {
            this.#owner = newOwner;
        } else {
            console.log("Owner name cannot be empty");
        }
    }
}

const account = new BankAccount("John");

account.deposit(200);
account.withdraw(50);
account.withdraw(500); // попытка снять слишком много

console.log("Owner:", account.owner);
console.log("Balance:", account.getBalance());