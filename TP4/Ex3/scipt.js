class counter {
  number = 0;
  constructor() {
    document.getElementById("number").textContent =
      localStorage.getItem("counter");
  }

  decrease() {
    this.number = this.number - 1;
    return this.number;
  }
  increase() {
    this.number = this.number + 1;
    return this.number;
  }
  reset() {
    this.number = 0;
    return this.number;
  }
}
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

var counter1 = new counter();
increase.addEventListener("click", () => {
  localStorage.setItem("counter", counter1.increase());
  let number = Number(localStorage.getItem("counter"));
  document.getElementById("number").textContent = number;
});
decrease.addEventListener("click", () => {
  localStorage.setItem("counter", counter1.decrease());
  let number = Number(localStorage.getItem("counter"));
  document.getElementById("number").textContent = number;
});
reset.addEventListener("click", () => {
  localStorage.setItem("counter", counter1.reset());
  let number = Number(localStorage.getItem("counter"));
  document.getElementById("number").textContent = number;
});
