const span = document.querySelector('span');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        span.textContent += button.value;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        span.textContent += button.value;
    });
});

clearButton.addEventListener('click', () => {
    span.textContent = "";
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

function operate (operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}
