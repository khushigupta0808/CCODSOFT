const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = "";

function updateDisplay() {
  display.value = currentInput || "0";
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (e) {
    currentInput = "Error";
  }
  updateDisplay();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');

    if (key === 'C') {
      currentInput = "";
    } else if (key === 'Backspace') {
      currentInput = currentInput.slice(0, -1);
    } else if (key === '=') {
      calculate();
      return;
    } else {
      currentInput += key;
    }
    updateDisplay();
  });
});

document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.=BackspaceEntercC';

  if (!validKeys.includes(e.key)) return;

  if (e.key === 'Enter') {
    calculate();
  } else if (e.key.toLowerCase() === 'c') {
    currentInput = "";
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput += e.key;
  }

  updateDisplay();
});
