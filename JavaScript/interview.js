// This will be used for the news interviews. It'll have a class, and it'll show the answer to it.
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";

const questions = [question1, question2, question3];
const answers = [answer1, answer2, answer3];

for (let i = 0; i < questions.length; i++) {
    questionEvent(questions[i], answers[i]);
}

function questionEvent(question, answer) {
    question.addEventListener("click", function() {
        interviewDisplay(answer);
    });
}

function interviewDisplay(answer) {
    if(answer.style.display == "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block"
    }
}