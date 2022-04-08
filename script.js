const span = document.querySelector('span');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelectorAll('.decimal');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let displayData = '';
let operatorUsed = false;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {

        span.textContent += button.value;
        displayData += button.value;

    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operatorUsed) {
            let result = getResult();
            showResult(result);
        }

        setOperator(button);

        operatorUsed = true;

    });
});

decimalButton.forEach(button => {
    button.addEventListener('click', () => {
        displayData += button.value;
        span.textContent += button.value;
    });
});

equalsButton.addEventListener('click', () => {
    let result = getResult();
    showResult(result);
    operatorUsed = false;
});

clearButton.addEventListener('click', () => {

    resetOperation();
    
});

function setOperator(button) {
    switch (button.value) {
        case '+':
            displayData += 'add';
            span.textContent += '+'
            break;
        case '-':
            displayData += 'subtract';
            span.textContent += '-'
            break;
        case '*':
            displayData += 'multiply';
            span.textContent += 'x'
            break;
        case '/':
            displayData += 'divide';
            span.textContent += '÷';
            break;
    }
}

function getResult() {
    const numbers = parseNumbers(displayData);
    const operator = parseOperator(displayData);

    let result = operate(numbers[0], operator, numbers[1]);

    let resultLength = result.toString().length;

    if (resultLength > 15) {
        result = Math.round((result + Number.EPSILON) * (10**15)) / (10**15);
    }

    return result;
}

function showResult(result) {
    displayData = result;
    span.textContent = result;
}

function parseNumbers(displayData) {
    const operatorsRegEx = /(add|subtract|multiply|divide)/;

    let numbers = displayData.replace(operatorsRegEx, ',').split(',');
    numbers = numbers.map(number => Number(number));

    return numbers;
}

function parseOperator(displayData) {
    const numbersRegEx = /(-?[0-9\.]+)/g;
    const operator = displayData.replace(numbersRegEx, '');

    return operator;
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
    if (operator === 'add') return add(firstNumber, secondNumber);
    if (operator === 'subtract') return subtract(firstNumber, secondNumber);
    if (operator === 'multiply') return multiply(firstNumber, secondNumber);
    if (operator === 'divide') return divide(firstNumber, secondNumber);
}

function resetOperation() {
    displayData = '';
    span.textContent = '';
    operatorUsed = false;
}
