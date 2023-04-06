const input = document.querySelector('.input');
const clearEntry = document.querySelector('.delete-entry');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let currentInput = '';
let previousInput = '';
let operator = '';

// Add event listeners to number buttons
numbers.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumber(button.dataset.number);
    updateDisplay();
  });
});

// Add event listeners to operator buttons
operators.forEach((button) => {
  button.addEventListener('click', () => {
    selectOperator(button.dataset.operator);
    updateDisplay();
  });
});

// Add event listener to equals button
equals.addEventListener('click', () => {
  calculate();
  updateDisplay();
});

// Add event listener to clear entry button
clearEntry.addEventListener('click', () => {
  deleteNumber();
  updateDisplay();
});

// Add event listener to clear button
clear.addEventListener('click', () => {
  clearAll();
  updateDisplay();
});

// Function to append number to current input
function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
}

// Function to select operator
function selectOperator(selectedOperator) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = selectedOperator;
  previousInput = currentInput;
  currentInput = '';
}

// Function to perform calculation
function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = '';
  previousInput = '';
}

// Function to delete last input
function deleteNumber() {
  currentInput = currentInput.slice(0, -1);
}

// Function to clear all inputs
function clearAll() {
  currentInput = '';
  previousInput = '';
  operator = '';
}

// Function to update display
function updateDisplay() {
  input.value = currentInput;
}
