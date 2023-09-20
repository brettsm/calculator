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
            displayContent += '0';
            enteredNum += '0';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '1':
            displayContent += '1';
            enteredNum += '1';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '2':
            displayContent += '2';
            enteredNum += '2';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '3':
            displayContent += '3';
            enteredNum += '3';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '4':
            displayContent += '4';
            enteredNum += '4';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '5':
            displayContent += '5';
            enteredNum += '5';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '6':
            displayContent += '6';
            enteredNum += '6';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '7':
            displayContent += '7';
            enteredNum += '7';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '8':
            displayContent += '8';
            enteredNum += '8';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '9':
            displayContent += '9';
            enteredNum += '9';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '+':
            operand1 = enteredNum;
            enteredNum = '';
            displayContent += ' + ';
            operator = '+';
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '-':
            operand1 = enteredNum;
            enteredNum = '';
            displayContent += ' - ';
            operator = '-'
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '*':
            operand1 = enteredNum;
            enteredNum = '';
            displayContent += ' * ';
            operator = '*'
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '/':
            operand1 = enteredNum;
            enteredNum = '';
            displayContent += ' / ';
            operator = '/'
            node = document.createTextNode(displayContent);
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
        case '=':
            displayContent = '';
            previousAnswer = node = document.createTextNode(operate(operand1, operand2, operator));
            para.appendChild(node);
            displayDiv.appendChild(para);
            break;
    }
}

let operand1, operand2, operator;
let displayContent = '';
let enteredNum = '';
let previousAnswer = '';

