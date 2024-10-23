var first = document.getElementById("number");
var result = document.getElementById("result");

var buffer = 0

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

    switch (operand) {
        case "addition":
            buffer = buffer + firstNumber;
            break;
        case "subtraction":
            buffer = buffer - firstNumber;
            break;
        case "division":
            buffer = buffer / firstNumber;
            break;
        case "multiplication":
            buffer = buffer * firstNumber;
            break;
        default:
            return;
    }

    // Aggiunstamento errore di calcolo dovuto alla rappresentazione binaria.
    // Sarebbe da evitare in production, ma questa è solo una dimostrazione.
    buffer = Math.round(buffer*1000)/1000

    result.innerHTML = buffer;
}