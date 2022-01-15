const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");

console.log(`${questions}, ${answers}`)

for (let i = 0; i < questions.length; i++) {
    questionEvent(questions[i], answers[i]);
    answers[i].style.display = "none";
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