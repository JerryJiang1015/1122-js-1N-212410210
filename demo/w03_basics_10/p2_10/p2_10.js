const userInput = document.querySelector('#input-number');
const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');
const currentCalculationOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseFloat(userInput.value);
}

function outputResult(result, text) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}

function F() {
  const b = parseFloat(getUserInput());

  const c = ((b - 32) * 5) / 9;

  outputResult(b, c);
}

function b() {
  const f = parseFloat(userInput.value);
  const c = ((f - 32) * 5) / 9;
  const output = `${f} F = ${celsius.toFixed(2)} C`;
  displayResult(output);
}

function C() {
  const operand1 = currentResult;
  const b = parseFloat(getUserInput());

  currentResult = operand1 - b;
  const calText = `${operand1} - ${b}`;
  console.log(`${operand1} - ${b} = ${currentResult}`);
  outputResult(currentResult, calText);
}

cBtn.addEventListener('click', C);
fBtn.addEventListener('click', F);
