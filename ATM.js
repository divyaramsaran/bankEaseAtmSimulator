class ATM {
  #cardHolderName;
  #pin;
  #accountBalance = 100000;

  operations() {
    console.clear();
    console.log(`1.Withdraw
2.Deposit
3.Balance Inquiry
4.Change PIN
5.Exit`);
    return Number(prompt("Enter choice:"));
  }

  validateOperation(operation, obj, remainingAttempts) {
    if ((operation > 5 || operation < 1) && remainingAttempts !== 0) {
      remainingAttempts--;

      console.log("Incorrect Input Attemps Left", remainingAttempts);
      return this.computeOperations(obj, remainingAttempts);
    }
    if (remainingAttempts === 0) {
      console.log(
        "Card locked due to too many failed attempts. Please contact your bank."
      );
      return false;
    }
    return true;
  }

  details(obj) {
    obj.userName = prompt("enter userName", "ramsaran");
    obj.pin = Number(prompt("enter you ATM pin", 1456788));
    const pinLength = Math.ceil(Math.log10(obj.pin));

    if (isNaN(obj.pin) || pinLength < 5) {
      console.clear();
      console.log("Enter a valid pin length should be equal or greater than 5");
      return obj.details(obj);
    }
    console.log(obj.computeOperations(obj, 3));
  }

  withdraw(obj) {
    const amount = Number(prompt("Enter amount to withdraw:"));
    if (isNaN(amount) || amount <= 0 || amount % 100 !== 0) {
      return "Invalid amount. Please enter a positive multiple of 100.";
    }
    if (amount > obj.#accountBalance) {
      return "Insufficient Balance.";
    }
    if (amount > 20000) {
      return "Withdrawal limit per transaction is ₹20,000.";
    }
    obj.#accountBalance -= amount;
    return `Transaction successful. Please collect your cash. Your current balance is: ₹${
      obj.#accountBalance
    }`;
  }

  deposit(obj) {
    const amount = Number(prompt("Enter amount to deposit:"));
    if (isNaN(amount) || amount <= 0 || amount % 100 !== 0) {
      return "Invalid amount. Please enter a positive multiple of 100.";
    }
    obj.#accountBalance += amount;
    return `Deposit successful availble balance: ${obj.#accountBalance}`;
  }

  balanceInquiry(obj) {
    return `Available Balance:${obj.#accountBalance}`;
  }

  changePin(obj) {
    console.log("Your current pin is", obj.pin);
    const newPin = Number(prompt("Enter new ATM pin"));
    const pinLength = Math.ceil(Math.log10(newPin));
    if (isNaN(newPin) || pinLength < 5) {
      console.clear();
      console.log("Enter a valid pin length should be equal or greater than 5");
      return obj.changePin(obj);
    }
    obj.pin = newPin;
    return `NewPin Set Succesfully Your New Pin Is: ${obj.pin}`;
  }

  exit() {
    return `Thank you for using our ATM`;
  }

  continueOrNot() {
    return confirm("Do you want another transaction?");
  }

  computeOperations(obj, accountBalance) {
    const type = this.operations();

    if (type === 5) {
      return this.exit();
    }

    if (!this.validateOperation(type, obj, accountBalance)) {
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
obj.details(obj);
