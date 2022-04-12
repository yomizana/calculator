const operationArea = document.querySelector('.operation');
const resultArea = document.querySelector('.result');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backButton = document.querySelector('.back');

operationArea.textContent = '';
resultArea.textContent = '0';

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.value))
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => setOperator(button.value));
});

decimalButton.addEventListener('click', () => appendDecimal(decimalButton.value));
equalsButton.addEventListener('click', () => evaluateOperation());
backButton.addEventListener('click', () => removeLastValue());
clearButton.addEventListener('click', () => resetOperation());

function appendNumber(value) {

    operationArea.textContent += value;

    if (!operator) {
        firstNumber += value;
        
    } else {
        secondNumber += value;
    }
}

function appendDecimal(value) {

    if (!operator) {
        if (includesDecimal(firstNumber)) return;

        operationArea.textContent += value;
        firstNumber += value;
        
    } else {
        if (includesDecimal(secondNumber)) return;

        operationArea.textContent += value;
        secondNumber += value;
    }
}

function includesDecimal(number) {

    if (number.includes('.')) return true;
    return false;

}

function setOperator(value) {
    if (firstNumber === '') return;

    if (operator && secondNumber) {
        evaluateOperation();
        operationArea.textContent = result;

        operator = value;

        operationArea.textContent += operator;

        return;
    }
    
    if (operator) {
        
        if (result) operationArea.textContent = result;

        operator = value;

        if (isLastOperator()) {
            operationArea.textContent = operationArea.textContent.slice(0, -1);
        }

        operationArea.textContent += operator;

        return;
    }

    operationArea.textContent += value;
    operator = value;
}

function isLastOperator() {
    const text = operationArea.textContent.slice(-1);
    const operators = ['+', '-', '*', '/'];

    for (let i = 0; i < operators.length; i++) {
        if (text === operators[i]) return true;
    }

    return false;

}

function evaluateOperation() {
    if (!secondNumber) return alert('Invalid operation.');
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (operator === '/' && secondNumber === 0) {
        return alert('You can\'t divide by zero.');
    }

    result = operate(firstNumber, operator, secondNumber);

    result = Math.round(result * 10000) / 10000;

    console.log(result);

    resultArea.textContent = result;

    firstNumber = result.toString();
    secondNumber = '';
    operationArea.textContent = '';
}

function removeLastValue() {
    if (secondNumber) {
        operationArea.textContent = operationArea.textContent.slice(0, -1);
        secondNumber = secondNumber.slice(0, -1);
        return;
    } 

    if  (operator) {
        operationArea.textContent = operationArea.textContent.slice(0, -1);
        operator = '';
        return;
    } 
    
    if (firstNumber) {
        operationArea.textContent = operationArea.textContent.slice(0, -1);
        firstNumber = firstNumber.slice(0, -1);

        if (result) result.slice(0, -1);
        return;
    }

    return;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (firstNumber, operator, secondNumber) {
    if (operator === '+') return add(firstNumber, secondNumber);
    if (operator === '-') return subtract(firstNumber, secondNumber);
    if (operator === '*') return multiply(firstNumber, secondNumber);
    if (operator === '/') return divide(firstNumber, secondNumber);
}

function resetOperation() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';

    operationArea.textContent = '';
    resultArea.textContent = '0';
}
