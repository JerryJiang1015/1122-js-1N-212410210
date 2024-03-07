const userInput = document.querySelector('#input-number');
const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');

function C() {
  const c = parseFloat(userInput.value);
  const f = (c * 9) / 5 + 32;
  const output = `${c} C = ${f.toFixed(2)} F`;
  displayResult(output);
}

function F() {
  const f = parseFloat(userInput.value);
  const c = ((f - 32) * 5) / 9;
  const output = `${f} F = ${c.toFixed(2)} C`;
  displayResult(output);
}

function displayResult(output) {
  const resultElement = document.querySelector('#results');
  resultElement.innerHTML = `<h1 id="current-calculation">${output}</h1>`;
}

cBtn.addEventListener('click', C);
fBtn.addEventListener('click', F);
