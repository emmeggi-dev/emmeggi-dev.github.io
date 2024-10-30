var displayElement = document.getElementById("display");

var displayBuffer = ""
var memoryBuffer = null;
var operator = "";
var eraseOnInput = false;

function updateDisplay(text) {
    displayBuffer = text;
    if (displayBuffer == "") displayElement.innerHTML = "0";
    else displayElement.innerHTML = displayBuffer;
}

function numberButton(num) {
    if (eraseOnInput) {
        updateDisplay("");
        eraseOnInput = false;
    }
    updateDisplay(displayBuffer + num);
}

function operatorButton(operation) {
    memoryBuffer = displayBuffer;
    operator = operation;
    eraseOnInput = true;
}

function execute() {
    if (memoryBuffer == null || operator == "") return;
    switch (operator) {
        case "+":
            updateDisplay(parseFloat(memoryBuffer) + parseFloat(displayBuffer));
            break;
        case "-":
            updateDisplay(parseFloat(memoryBuffer) - parseFloat(displayBuffer));
            break;
        case "*":
            updateDisplay(parseFloat(memoryBuffer) * parseFloat(displayBuffer));
            break;
        case "/":
            updateDisplay(parseFloat(memoryBuffer) / parseFloat(displayBuffer));
            break;
    }
    memoryBuffer = null;
    eraseOnInput = true;
    operator = "";
}

function clearDisplay() {
    updateDisplay("");
    memoryBuffer = null;
    eraseOnInput = false;
    operator = "";
}