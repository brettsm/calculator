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
            previousAnswer = displayContent = operate(parseFloat(operand1), parseFloat(operand2), operator);
            break;
    }

    displayDiv.textContent = displayContent;
}

let operand1, operand2, operator;
let displayContent = '';
let enteredNum = '';
let previousAnswer = '';

const btns = document.querySelectorAll('.btn');
btns.forEach(button => {
    button.addEventListener('click', () => {
        updateCalcDisplay(button.textContent);
    })
});


