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

let operand1, operand2, operator;

