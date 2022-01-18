const QAndA = [
    {question: "Why have you made this website?", answer: "We want to alert that a new company is coming out!"},
    {question: "What's Slug and Leaf?", answer: "It's a story we're working on that's about a Slug and Leaf!"},
    {question: "Can you write a story?", answer: "Yeah, because I'm working on Slug and Leaf!"}
]

var form = document.getElementById("QAndAForm")

var interviewDiv = document.getElementById("interview");
interviewDiv.innerHTML = '';

for (let i = 0; i < QAndA.length; i++) {
    interviewDiv.innerHTML += `
        <li class="question"><b>Question:</b> ${QAndA[i].question}</li>
        <li class="answer"><b>Melody:</b> ${QAndA[i].answer}</li>
    `;
}

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