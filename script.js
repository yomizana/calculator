const span = document.querySelector('span');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let operation = {
    firstNumber: 0,
    operator: '',
    secondNumber: 0,
    result: 0
}

let displayScreenData = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        span.textContent += button.value;
        displayScreenData = parseInt(span.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operation.firstNumber = displayScreenData;
        displayScreenData = '';

        span.textContent += button.value;
        operation.operator = button.value;
    });
});

equalsButton.addEventListener('click', () => {
    operation.secondNumber = displayScreenData;
    displayScreenData = '';

    operate(operation);
    span.textContent = operation.result;
});

clearButton.addEventListener('click', () => {
    span.textContent = "";

    resetOperation();
});

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

function operate (obj) {
    if (obj.operator === '+') obj.result = add(obj.firstNumber, obj.secondNumber);
    if (obj.operator === '-') obj.result = subtract(obj.firstNumber, obj.secondNumber);
    if (obj.operator === '*') obj.result = multiply(obj.firstNumber, obj.secondNumber);
    if (obj.operator === '/') obj.result = divide(obj.firstNumber, obj.secondNumber);
}
