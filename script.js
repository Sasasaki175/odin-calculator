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
  if((firstNumber === "no number" || display.textContent === "0") 
  && operator === "no operator") {
    display.textContent = num;
    firstNumber = display.textContent;
  } else {
    display.textContent = display.textContent + num;
    firstNumber = display.textContent;
  }
}

function operatorInput(operator) {
  if(firstNumber !== "no number") {
    display.textContent = firstNumber + " " + operator + " ";
  }
}

function clearInput() {
  firstNumber = "no number";
  secondNumber = "no number";
  operator = "no operator";
  display.textContent = "0";
}

const buttonSeven = document.querySelector("#seven");
const buttonEight = document.querySelector("#eight");
const buttonNine = document.querySelector("#nine");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");
const buttonSix = document.querySelector("#six");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonZero = document.querySelector("#zero");
const buttonAdd = document.querySelector("#add");
const buttonSubtract = document.querySelector("#subtract");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivide = document.querySelector("#divide");
const buttonClear = document.querySelector("#clear");
const buttonEquals = document.querySelector("#equel");

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

buttonSix.addEventListener("click", () => {
  numInput("6");
});

buttonOne.addEventListener("click", () => {
  numInput("1");
});

buttonTwo.addEventListener("click", () => {
  numInput("2");
});

buttonThree.addEventListener("click", () => {
  numInput("3");
});

buttonZero.addEventListener("click", () => {
  numInput("0");
});

buttonAdd.addEventListener("click", () => {
  operatorInput("+");
});

buttonSubtract.addEventListener("click", () => {
  operatorInput("-");
});

buttonMultiply.addEventListener("click", () => {
  operatorInput("*");
});

buttonDivide.addEventListener("click", () => {
  operatorInput("/");
});

buttonClear.addEventListener("click", () => {
  clearInput();
});

let firstNumber = "no number";
let secondNumber = "no number";
let operator = "no operator";

