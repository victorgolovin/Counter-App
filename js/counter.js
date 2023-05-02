let buttonCounter = document.querySelector(".counter-btn");
let buttonReset = document.querySelector(".counter-btn-reset");
let counterNumber = document.querySelector(".counter-number");
let counter = 0;

buttonCounter.addEventListener("click", function () {
  counter = counter + 1;

  counterNumber.innerText = counter;
});

buttonReset.addEventListener("click", function () {
  counter = counter * 0;

  counterNumber.innerText = counter;
});