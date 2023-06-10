const counterEl = document.getElementById("counterValue");
const addOnePoolButton = document.getElementById("addOnePoolButton");
const addTwoPoolsButton = document.getElementById("addTwoPoolsButton");
const resetButton = document.getElementById("resetButton");

const COUNT_INITIAL_VALUE = 0;

let counter = COUNT_INITIAL_VALUE;
counterEl.innerText = counter;

addOnePoolButton.addEventListener("click", function() {
  counter = counter + 1;
  console.log(counter)

  counterEl.innerText = counter;
});

addTwoPoolsButton.addEventListener("click", function () {
  counter = counter + 2;
  counterEl.innerText = counter;
});

resetButton.addEventListener("click", function () {
  counter = COUNT_INITIAL_VALUE;
  counterEl.innerText = counter;
});