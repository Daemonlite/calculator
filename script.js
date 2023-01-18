let display = document.getElementById("display");
let currentNum = "";
let currentOperator = "";
let currentResult = 0;

function addNum(num) {
  currentNum += num;
  display.value = currentNum;
}

function addOperator(operator) {
  currentOperator = operator;
  currentResult = parseFloat(currentNum);
  currentNum = "";
}

function calculate() {
  currentNum = parseFloat(currentNum);
  switch(currentOperator) {
    case "+":
      currentResult += currentNum;
      break;
    case "-":
      currentResult -= currentNum;
      break;
    case "*":
      currentResult *= currentNum;
      break;
    case "/":
      currentResult /= currentNum;
      break;
    default:
      currentResult = currentNum;
  }
  display.value = currentResult;
  currentNum = "";
  currentOperator = "";
  currentResult = 0;
}

function clearDisplay() {
  currentNum = "";
  currentOperator = "";
  currentResult = 0;
  display.value = "";
}

