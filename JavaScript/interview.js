const QAndA = [
    {question: "Is this a question?", answer: "Yes"},
    {question: "Is it not?", answer: "No"}
]

// var test = document.getElementById("testP");
// var element = document.createElement("p");
// element.innerText = "Hi, this is for TEST ONLY SO DO NOT LOOK"
// test.appendChild(element);

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