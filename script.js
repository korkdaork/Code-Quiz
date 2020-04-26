var startPage = document.getElementById("start-page");
var startButton = document.getElementById("startbtn");
var timer;
var time = 60;
var timerEl = document.querySelector(".timer");
//var qu

//QUESTION VARIABLES
var questionsContainer = document.getElementById("questions");
var questions = questionsContainer.children;
var questionIndex = 0;

function showCurrentQuestion() {
    questionIndex;
    if (questionIndex > 0) {
        questions[questionIndex - 1].classList.add("hide");
    }
    questions[questionIndex].classList.remove("hide");
};

//START TIMER AND RUN OUT OF TIME FUNCTION!
function startTimer() {
    time--;
    timerEl.textContent = "Time left: " + time;
    if (time === 0) {
        clearInterval(timer);
        timerEl.textContent = "YOU ARE OUT OF TIME!";
        questions[questionIndex].classList.add("hide");
    }
}

//START QUIZ FUNCTION
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    timer = setInterval(startTimer, 1000)
    startPage.classList.add("hide");
    showCurrentQuestion();
}

//CORRECT ANSWER FUNCTION
var correctBtnContainer = document.getElementsByClassName("correct");
var correctBtns = correctBtnContainer.children;
var btnIndx = 0;
let correctBtn = document.getElementsByClassName("correct")

correctBtn[0].addEventListener("click", correctAnswer)
correctBtn[1].addEventListener("click", correctAnswer)
correctBtn[2].addEventListener("click", correctAnswer)
correctBtn[3].addEventListener("click", correctAnswer)

function correctAnswer() {
    alert("You Got it RIGHT!");
    questionIndex++;
    showCurrentQuestion();
}

//INCORRECT ANSWER FUNCTION
var incorrectBtnContainer = document.getElementsByClassName("incorrect");
var incorrectBtns = correctBtnContainer.children;
var incbtnIndx = 0;
let incorrectBtn = document.getElementsByClassName("incorrect")

incorrectBtn[0].addEventListener("click", incorrectAnswer)
incorrectBtn[1].addEventListener("click", incorrectAnswer)
incorrectBtn[2].addEventListener("click", incorrectAnswer)
incorrectBtn[3].addEventListener("click", incorrectAnswer)
incorrectBtn[4].addEventListener("click", incorrectAnswer)
incorrectBtn[5].addEventListener("click", incorrectAnswer)
incorrectBtn[6].addEventListener("click", incorrectAnswer)
incorrectBtn[7].addEventListener("click", incorrectAnswer)
incorrectBtn[8].addEventListener("click", incorrectAnswer)
incorrectBtn[9].addEventListener("click", incorrectAnswer)
incorrectBtn[10].addEventListener("click", incorrectAnswer)
incorrectBtn[11].addEventListener("click", incorrectAnswer)

function incorrectAnswer() {
    alert("Did you even STUDY BRO!?");
    questionIndex++;
    showCurrentQuestion();
};

