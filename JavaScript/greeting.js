var today = new Date;
var hourNow = today.getHours();
var greeting;

// Check time so we can change the greeting

if(hourNow > 18) {
    greeting = "Good Evening, friend!";
} else if(hourNow > 12) {
    greeting = "Good Afternoon, friend!";
} else if(hourNow > 0) {
    greeting = "Good Morning, friend!";
} else {
    greeting = "Hello, friend!";
}

// Write the greeting
document.write(greeting);

// TEST

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