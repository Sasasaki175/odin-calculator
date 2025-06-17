function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function operate(inputOperator, firstOperateNumber, secondOperateNumber) {
  switch(inputOperator) {
    case "+":
      add(firstOperateNumber, secondOperateNumber);
      break;
    case "-":
      subtract(firstOperateNumber, secondOperateNumber);
      break;
    case "*":
      multiply(firstOperateNumber, secondOperateNumber);
      break;
    case "/":
      divide(firstOperateNumber, secondOperateNumber);
      break;
  }
}

function numInput(inputNum) {
  if((firstNumber === "no number" || firstNumber === "0") 
  && operator === "no operator") {
    firstNumber = inputNum;
    display.textContent = firstNumber;
  } else if (operator === "no operator"){
    firstNumber = firstNumber + inputNum;
    display.textContent = firstNumber;
  }

  if(secondNumber === "no number" && operator !== "no operator") {
    secondNumber = inputNum;
    display.textContent = display.textContent + secondNumber;
  } else if(secondNumber === "no number" && inputNum === "0" && operator !== "no operator") {

  } else if (operator !== "no operator"){
    secondNumber = secondNumber + inputNum;
    display.textContent = display.textContent + inputNum;
  }
  
}

function operatorInput(inputOperator) {
  if(firstNumber !== "no number" && secondNumber === "no number") {
    display.textContent = firstNumber + " " + inputOperator + " ";
    operator = inputOperator;
  } else if(secondNumber !== "no number") {
    firstNumber = operate(operator, firstNumber, secondNumber);
    display.textContent = firstNumber + " " + inputOperator + " ";
    operator = inputOperator;
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

