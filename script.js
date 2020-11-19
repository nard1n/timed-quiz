
// Time counter variables/ end of quiz
var timeEl = document.querySelector (".time");
var mainEl = document.querySelector ("h2");

var secondsLeft = 5;


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

setTime();