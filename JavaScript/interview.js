// This will be used for the news interviews. It'll have a class, and it'll show the answer to it.
// HARDCODE FOR NOW!

var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";


question1.addEventListener("click", function() {
    if(answer1.style.display == "block") {
        answer1.style.display = "none";
    } else {
        answer1.style.display = "block"
    }
});

question2.addEventListener("click", function() {
    if(answer2.style.display == "block") {
        answer2.style.display = "none";
    } else {
        answer2.style.display = "block"
    }
});

question3.addEventListener("click", function() {
    if(answer3.style.display == "block") {
        answer3.style.display = "none";
    } else {
        answer3.style.display = "block"
    }
});