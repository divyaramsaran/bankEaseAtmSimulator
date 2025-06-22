class ATM {
  #userName;
  #pin;

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

  computeOperations(obj, incorrectAttempts) {
    const operation = this.operations();
    return this.validateOperation(operation, obj, incorrectAttempts);
  }
}
const obj = new ATM();
obj.userName = prompt("enter userName", "ramsaran");
obj.pin = Number(prompt("enter you ATM pin", 1456788));
obj.computeOperations(obj, 3);
