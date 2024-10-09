var first = document.getElementById("first-number");
var second = document.getElementById("second-number");
var result = document.getElementById("result");

var operand = "";

function addition() {
    operand = "addition";
}

function subtraction() {
    operand = "subtraction";
}

function division() {
    operand = "division";
}

function multiplication() {
    operand = "multiplication";
}

function compute() {
    var firstNumber = Number(first.value);
    var secondNumber = Number(second.value);
    var toPrintOut = 0

    switch (operand) {
        case "addition":
            toPrintOut = firstNumber + secondNumber;
            break;
        case "subtraction":
            toPrintOut = firstNumber - secondNumber;
            break;
        case "division":
            toPrintOut = firstNumber / secondNumber;
            break;
        case "multiplication":
            toPrintOut = firstNumber * secondNumber;
            break;
        default:
            return;
    }

    result.innerHTML = "Risultato: " + toPrintOut;
}