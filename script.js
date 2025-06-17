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
    case 1:
      add(firstNumber, secondNumber);
      break;
    case 2:
      subtract(firstNumber, secondNumber);
      break;
    case 3:
      multiply(firstNumber, secondNumber);
      break;
    case 4:
      divide(firstNumber, secondNumber);
      break;
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

let firstNumber;
let secondNumber;
let operator;

