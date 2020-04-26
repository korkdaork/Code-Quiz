
var startPage = document.getElementById("start-page");
var startButton = document.getElementById("startbtn");
var timer;
var time = 60;
var timerEl = document.querySelector(".timer");


//EVENT LISTENERS
startButton.addEventListener("click", startQuiz);

//QUESTION VARIABLES
//var
var questions = document.getElementById("questions").children;
var questionIndex = 0;

function showCurrentQuestion() {
    if (questionIndex > 0) {
        questions[questionIndex - 1].classList.add("hide");
    }
    questions[questionIndex].classList.remove("hide");

    // if (co)

}
console.log(questions)


//START TIMER
function startTimer() {
    time--;
    timerEl.textContent = "Time left: " + time;

    if (time === 0) {
        clearInterval(timer);
        timerEl.textContent = "YOU ARE OUT OF TIME!"
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
    question1.classList.add("hide");
    question2.classList.remove("hide");
}

//INCORRECT ANSWER FUNCTION
function incorrectAnswer() {
    alert("Wow...did you even study bro!?");
    question1.classList.add("hide");
    question2.classList.remove("hide");
}

// var question1 = document.getElementById("q1");
// var correctAnswers = document.getElementByClass("correct");
//var incorrectAnswer = document.querySelectorAll("incorrect");
//console.log(incorrectAnswer)
