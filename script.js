function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  switch(operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
  }
}

function numInput(num) {
  if(display.textContent === "0") {
    display.textContent = num;
  } else {
    display.textContent = display.textContent + num;
  }
}

const buttonSeven = document.querySelector("#7");
const buttonEight = document.querySelector("#8");
const buttonNine = document.querySelector("#9");
const buttonFour = document.querySelector("#4");
const buttonFive = document.querySelector("#5");
const buttonSix = document.querySelector("#6");
const buttonOne = document.querySelector("#1");
const buttonTwo = document.querySelector("#2");
const buttonThree = document.querySelector("#3");
const buttonAdd = document.querySelector("#+");
const buttonSubtract = document.querySelector("#-");
const buttonMultiply = document.querySelector("#x");
const buttonDivide = document.querySelector("#/");
const buttonClear = document.querySelector("#c");
const buttonEquals = document.querySelector("#=");

const display = document.querySelector("#display");

buttonSeven.addEventListener("click", () => {
  numInput("7");
});

buttonEight.addEventListener("click", () => {
  numInput("8");
});

buttonNine.addEventListener("click", () => {
  numInput("9");
});

buttonFour.addEventListener("click", () => {
  numInput("4");
});

buttonFive.addEventListener("click", () => {
  numInput("5");
});

let firstNumber;
let secondNumber;
let operator;

