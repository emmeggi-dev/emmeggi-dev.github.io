var name_ = document.getElementById("name");
var surname = document.getElementById("surname");
var address = document.getElementById("address");
var city = document.getElementById("city");
var email = document.getElementById("email");
var cf = document.getElementById("cf");
var table = document.getElementById("cool-table");

var values = []

function ok() {
    if (
        name_.value == "" ||
        surname.value == "" ||
        address.value == "" ||
        city.value == "" ||
        email.value == "" ||
        cf.value == ""
    ) return;

    values.push([
        name_.value,
        surname.value,
        address.value,
        city.value,
        email.value,
        cf.value
    ]);

    name_.value = "";
    surname.value = "";
    address.value = "";
    city.value = "";
    email.value = "";
    cf.value = "";

    drawTable();
}

function drawTable() {
    var html = "<tr><th>Nome</th><th>Cognome</th><th>Indirizzo</th><th>Città</th><th>Email</th><th>Codice Fiscale</th></tr>"
    for (var i of values)
        html += `<tr><td>${i[0]}</td><td>${i[1]}</td><td>${i[2]}</td><td>${i[3]}</td><td>${i[4]}</td><td>${i[5]}</td></tr>`
    table.innerHTML = html;
}