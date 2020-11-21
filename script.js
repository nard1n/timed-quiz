
// Time counter variables/ end of quiz
var timeEl = document.querySelector (".time");
var mainEl = document.querySelector ("h2");
var quizContainer = document.querySelector("#quizQuestion");
var submitAnswer = document.querySelector("button");
var startTimer = document.querySelector(".start-button");

// declare time user has to finish quiz
var secondsLeft = 5;

// timer logic
function setTime() {
    var timeInterval = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    
    mainEl.textContent = "All done!";

}

//setTime(); /to test timer runs on page loads
// eventlister function to start timer when "start quiz" button is clicked
startTimer.addEventListener('click', setTime);

// display quiz when user clicks start quiz button
function buildQuiz(){}
// display correct/wrong in the footer, 
function questionResult (){}
// displays ability for user to save score
function saveScore () {}
// surface highscores when "Highscores" nav button is clicked
function displayScore (){}

//$(".start-button").on("click", funtion(){
//    setTime();
//});