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

  display(obj) {
    console.log(obj.#userName);
    console.log(obj.#pin);
  }
}
const obj = new ATM();
obj.userName = prompt("enter userName", "ramsaran");
obj.pin = Number(prompt("enter you ATM pin", 1456788));
obj.display(obj);
