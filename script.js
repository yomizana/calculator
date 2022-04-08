const span = document.querySelector('span');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let displayData = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {

        span.textContent += button.value;
        displayData += button.value;

    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {

        span.textContent += button.value;
        displayData += button.value;

    });
});

equalsButton.addEventListener('click', () => {
    let numbers = parseNumbers(displayData);
    let operator = parseOperator(displayData);

    let result = operate(numbers[0], operator, numbers[1]);

    displayData = result;
    span.textContent = result;
});

clearButton.addEventListener('click', () => {
    span.textContent = "";

    resetOperation();
});

function parseNumbers(displayData) {
    const operatorsRegEx = /(\+|\-|\*|\/)/;

    let numbers = displayData.replace(operatorsRegEx, ',').split(',');
    numbers = numbers.map(number => Number(number));

    return numbers;
}

function parseOperator(displayData) {
    const numbersRegEx = /[0-9]/g;
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
    if (operator === '+') return add(firstNumber, secondNumber);
    if (operator === '-') return subtract(firstNumber, secondNumber);
    if (operator === '*') return multiply(firstNumber, secondNumber);
    if (operator === '/') return divide(firstNumber, secondNumber);
}

function resetOperation() {
    displayData = '';
    span.textContent = '';
}
