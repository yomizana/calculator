const span = document.querySelector('span');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let firstNumberFilled = false;

let continousOperation = false;

let displayData = '';

let operation = {
    firstNumber: 0,
    operator: '',
    secondNumber: 0,
    result: 0
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        span.textContent += button.value;
        displayData += button.value;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (continousOperation) {
            operation.secondNumber = parseInt(displayData);
            operate(operation);
            span.textContent = operation.result;

            operation.firstNumber = operation.result;

            span.textContent += button.value;
            displayData = button.value;
            operation.operator = displayData;

            displayData = ''

            return;
        }

        if (!firstNumberFilled) {
            operation.firstNumber = parseInt(displayData);
            displayData = '';
        }

        span.textContent += button.value;
        displayData = button.value;

        operation.operator = displayData;

        displayData = '';

        firstNumberFilled = true;
        continousOperation = true;
    });
});

equalsButton.addEventListener('click', () => {
    operation.secondNumber =  parseInt(displayData);

    displayData = '';

    operate(operation);
    span.textContent = operation.result;

    operation.firstNumber = operation.result;
    firstNumberFilled = true;
    continousOperation = false;
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

function resetOperation() {
    operation.firstNumber = 0;
    operation.operator = '';
    operation.secondNumber = 0;
    values = [];
}
