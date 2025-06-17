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

let firstNumber;
let secondNumber;
let operator;

