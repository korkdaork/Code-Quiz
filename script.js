
var startPage = document.getElementById("start-page");
var startButton = document.getElementById("startbtn");
let correctBtn = document.getElementById("correct");
let incorrectBtn = document.getElementById("incorrect");
var timer;
var time = 60;
var timerEl = document.querySelector(".timer");
var qu

//EVENT LISTENERS
startButton.addEventListener("click", startQuiz);
// correctBtn.addEventListener("click", correctAnswer);
// incorrectBtn.addEventListener("click", incorrectAnswer);

//QUESTION VARIABLES
var questionsContainer = document.getElementById("questions")
var questions = questionsContainer.children;
var questionIndex = 0;
console.log(questionsContainer)
function showCurrentQuestion() {
    if (questionIndex > 0) {
        questions[questionIndex - 1].classList.add("hide");
    }
    questions[questionIndex].classList.remove("hide");

}

// let lastQuestionIndex = questionsArr.length - 1;
// let currentQuestionIndex = 0;
// let questionsArr = questions;

function nextQuestion() {
    questionIndex + 1;
}

//START TIMER
function startTimer() {
    time--;
    timerEl.textContent = "Time left: " + time;

    if (time === 0) {
        clearInterval(timer);
        timerEl.textContent = "YOU ARE OUT OF TIME!";
        questions[questionIndex].classList.add("hide");
    }
}
//START QUIZ
function startQuiz() {
    timer = setInterval(startTimer, 1000)
    startPage.classList.add("hide");
    showCurrentQuestion();

    // question1.classList.remove("hide");
}

//CORRECT ANSWER FUNCTION
function correctAnswer() {
    alert("You Got it RIGHT!");
    ;
};

//INCORRECT ANSWER FUNCTION
function incorrectAnswer() {
    alert("Wow...did you even study bro!?");
    showCurrentQuestion();
}
