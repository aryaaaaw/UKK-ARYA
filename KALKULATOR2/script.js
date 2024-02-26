const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      clearDisplay();
    } else if (item.id == "backspace") {
      backspace();
    } else if (display.innerText != "" && item.id == "equal") {
      calculate();
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      if (item.id == "*") {
        updateDisplay("×");
      } else if (item.id == "/") {
        updateDisplay("÷");
      } else {
        updateDisplay(item.id);
      }
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

function updateDisplay(value) {
  display.innerText += value;
}

function calculate() {
  try {
    let expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/'); // Ganti simbol '×' dengan '*' dan '÷' dengan '/'
    const result = eval(expression);

    if (Number.isFinite(result)) {
      display.innerText = result;
    } else {
      display.innerText = 'Error';
    }
  } catch (error) {
    display.innerText = 'Error';
  }
}

function clearDisplay() {
  display.innerText = '';
}

function backspace() {
  let string = display.innerText.toString();
  display.innerText = string.substr(0, string.length - 1);
}
