class ATM {
  #userName;
  #pin;
  #availableAmount = 100000;
  set userName(name) {
    this.#userName = name;
  }
  get userName() {
    return this.#userName;
  }

  set pin(password) {
    this.#pin = password;
  }
  get pin() {
    return this.#pin;
  }

  operations() {
    console.log(`1.Withdraw
2.Deposit
3.Balance Inquiry
4.Change PIN
5.Exit`);
    return Number(prompt("Enter choice:"));
  }

  validateOperation(operation, obj, incorrectAttempts) {
    if ((operation > 5 || operation < 1) && incorrectAttempts !== 0) {
      incorrectAttempts--;

      console.clear();
      console.log("Incorrect Input Attemps Left", incorrectAttempts);
      return this.computeOperations(obj, incorrectAttempts);
    }
    if (incorrectAttempts === 0) {
      console.log(
        "Card locked due to too many failed attempts. Please contact your bank."
      );
      return false;
    }
    return true;
  }

  withdraw(obj) {
    const amount = Number(prompt("Enter amount to withdraw:"));

    if (amount > obj.#availableAmount || amount < 0) {
      return "Insufficient Balance";
    }
    obj.#availableAmount -= amount;
    return `Transaction successful. Please collect your cash. Your current balance is:${
      obj.#availableAmount - amount
    }`;
  }

  deposit(obj) {
    const amount = Number(prompt("Enter amount to deposit:"));
    if (isNaN(amount)) {
      return "Try Again";
    }
    obj.#availableAmount += amount;
    return `Deposit successful availble balance: ${obj.#availableAmount}`;
  }

  balanceInquiry(obj) {
    return `Available Balance:${obj.#availableAmount}`;
  }

  changePin(obj) {
    const newPin = Number(prompt("Enter new ATM pin"));
    if (isNaN(newPin)) {
      return "Try Again";
    }
    obj.#pin = newPin;
    return `NewPin Set Succesfully Your New Pin Is: ${obj.#pin}`;
  }

  exit() {
    return `Thank you for using our ATM`;
  }

  continueOrNot() {
    return confirm("Do you want another transaction?");
  }

  computeOperations(obj, incorrectAttempts) {
    const type = this.operations();

    if (type === 5) {
      return this.exit();
    }

    if (!this.validateOperation(type, obj, incorrectAttempts)) {
      return "Try Again";
    }
    const operations = [
      this.withdraw,
      this.deposit,
      this.balanceInquiry,
      this.changePin,
    ];
    console.log(operations[type - 1](obj));

    return this.continueOrNot() ? this.computeOperations(obj, 3) : this.exit();
  }
}
const obj = new ATM();
obj.userName = prompt("enter userName", "ramsaran");
obj.pin = Number(prompt("enter you ATM pin", 1456788));
console.log(obj.computeOperations(obj, 3));
