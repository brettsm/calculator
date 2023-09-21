function add(x1, x2) {
    return x1 + x2;
}

function subtract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    return x1 / x2;
}

function operate(x1, x2, op) {
    switch(op) {
        case '+': return x1 + x2;
        case '-': return x1 - x2;
        case '*': return x1 * x2;
        case '/': return x1 / x2;
        default: console.log('INVALID OPERATOR');
    }
}

function updateCalcDisplay(buttonPressed) {
    let displayDiv = document.querySelector('.calc-display');
    let para = document.createElement('p');
    let node;
    switch(buttonPressed) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            displayContent += buttonPressed;
            enteredNum += buttonPressed;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            operand1 = enteredNum;
            enteredNum = '';
            displayContent += ` ${buttonPressed} `;
            operator = buttonPressed
            break;
        case '=':
            operand2 = enteredNum;
            enteredNum = '';
            previousAnswer = displayContent = document.createTextNode(operate(operand1, operand2, operator));
            break;
    }

    displayDiv.textContent = displayContent;
}

let operand1, operand2, operator;
let displayContent = '';
let enteredNum = '';
let previousAnswer = '';

const zeroButton = document.getElementById('zero');             //TODO: FIX WITH DOCUMENT.QUERYSELECTORALL
zeroButton.addEventListener('click', () => updateCalcDisplay('0'));

const oneButton = document.getElementById('one');
oneButton.addEventListener('click', () => updateCalcDisplay('1'));

const twoButton = document.getElementById('two');
twoButton.addEventListener('click', () => updateCalcDisplay('2'));

const threeButton = document.getElementById('three');
threeButton.addEventListener('click', () => updateCalcDisplay('3'));

const fourButton = document.getElementById('four');
fourButton.addEventListener('click', () => updateCalcDisplay('4'));

const fiveButton = document.getElementById('five');
fiveButton.addEventListener('click', () => updateCalcDisplay('5'));

const sixButton = document.getElementById('six');
sixButton.addEventListener('click', () => updateCalcDisplay('6'));

const sevenButton = document.getElementById('seven');
sevenButton.addEventListener('click', () => updateCalcDisplay('7'));

const eightButton = document.getElementById('eight');
eightButton.addEventListener('click', () => updateCalcDisplay('8'));

const nineButton = document.getElementById('nine');
nineButton.addEventListener('click', () => updateCalcDisplay('9'));



