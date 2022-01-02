var buttonMel = document.getElementById("melodyButton");
var buttonRyan = document.getElementById("ryanButton");
var buttonIsabela = document.getElementById("isabelaButton");
var textDataBox = document.getElementById("infoBox");

var melody = function() {
    textDataBox.innerHTML = "<h1>Melody is a female and she is 8.</h1>";
}

var ryan = function() {
    textDataBox.innerHTML = "<h1>Ryan is a male and he is 8.</h1>";
}

var isabela = function() {
    textDataBox.innerHTML = "<h1>Isabela is a female and she is 7.</h1>";
}

buttonMel.addEventListener("click", melody);
buttonRyan.addEventListener("click", ryan);
buttonIsabela.addEventListener("click", isabela);