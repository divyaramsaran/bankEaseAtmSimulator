class ATM {
  #userName;
  set userName(name) {
    this.#userName = name;
  }
  get userName() {
    return this.#userName;
  }
  display(obj) {
    return obj.#userName;
  }
}
const obj = new ATM();
obj.userName = prompt("enter userName");
console.log(obj.display(obj));