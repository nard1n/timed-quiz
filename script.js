// A quiz build with Javascript, displays one question at a time and allows user to save score
// DOM SELECTORS FOR MOST MAIN DIVS
var quizContainer = document.querySelector(".quiz-question");
var savedScore = document.querySelector (".save-score");
var startTimer = document.querySelector(".start-button");
var displayStart = document.querySelector(".start-instructions");

// DOM SELECTORS SPECIFIC TO HIGHSCORES
var anchor = document.querySelector(".anchor");
var highscoreListNames = document.querySelector(".high-scores")
var viewHighScores = document.querySelector(".high-score-list");
var goBack = document.querySelector(".go-back");
var clearScore = document.querySelector(".clear-scores");

// DOM SELECTORS SPECIFIC TO END OF QUIZ
var addNameBtn = document.querySelector(".add-btn");
var finalScoreIs = document.querySelector(".final-score-is");
var nameEl = document.querySelector(".name-input");
var players = [];

//DOM SELECTORS SPECIFIC TO QUIZ
var timeEl = document.querySelector (".time");
var submitAnswer = document.querySelector("button");
var quizQuestionHeader = document.querySelector(".question-text");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var result = document.querySelector(".result");

// QUIZ QUESTIONS AND ANSWERS STORED IN ARRAY
var myQuestions = [
    {
        "questionText": "What was the first national park in America?",
        "option1": "Death Valley National Park",
        "option2": "Yosemite National Park",
        "option3": "Acadia National Park",
        "option4": "Yellowstone National Park",
        "answer": "Yellowstone National Park"
    },
    {
        "questionText": "What national park is home to the worlds largest tree by volume?",
        "option1" : "Redwood National Park",
        "option2": "Sequoia National Park",
        "option3": "Everglades National Park",
        "option4": "Joshua Tree National Park",
        "answer": "Sequoia National Park"
    },
    {
        "questionText": "What national park is home to the longest cave system in the world?",
        "option1": "Mammoth Cave National Park",
        "option2": "Canyonlands National Park",
        "option3": "Carlsbad Cavers National Park",
        "option4": "Great Basin National Park",
        "answer": "Mammoth Cave National Park"
    },
    {
        "questionText": "What state contains the most national parks?",
        "option1": "Colorado",
        "option2": "Utah",
        "option3": "Alaska",
        "option4": "California",
        "answer": "California"
    }
];

// VARIABLES SPECIFIC TO STARTING QUIZ
var startScore = 0;
var questionIndex = 0;

// STARTS QUIZ AND TIMER
function startQuiz() {
    questionIndex = 0;
    secondsLeft = 30; //seconds in timer to start
    displayStart.style.display = "none"; // Hide instructions 
    quizContainer.style.display = "block"; // Show Quiz Questions

    var timeInterval = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0 || myQuestions.length === questionIndex) {
            timeEl.textContent = "Time: " + secondsLeft;
            clearInterval(timeInterval);
        }

    }, 1000);
}

// DISPLAY QUIZ QUESTIONS WHNE USER CLICKS STARTS QUIZ
function showNextQuestion(){
    var q = myQuestions[questionIndex];

    quizQuestionHeader.innerHTML = q.questionText;
    choice1.innerHTML = q.option1;
    choice1.setAttribute("data-answer", q.option1);
    choice2.innerHTML = q.option2;
    choice2.setAttribute("data-answer", q.option2);
    choice3.innerHTML = q.option3;
    choice3.setAttribute("data-answer", q.option3);
    choice4.innerHTML = q.option4;
    choice4.setAttribute("data-answer", q.option4);
}


// EVENT LISTENERS WHEN USER CLICKS ANSWERS 
showNextQuestion();
choice1.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
  checkAnswer(event);
})

 // CHECK TO SEE IF ANSWER IS CORRECT
function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (myQuestions[questionIndex].answer === answer) {
      correctAnswer = answer;
  }
  if (answer === correctAnswer) {
    result.textContent = "Correct!"; // If correct, say correct
  } else {
    result.textContent = "Wrong!"; // If wrong, say wrong & deduct 10 points
      secondsLeft -= 10 
          if (secondsLeft < 0) {
          secondsLeft = 0;
          }
      }
  if (myQuestions.length === questionIndex+1) {
    showFinalScore(); // If it has gone through all questions, show final score
    return; // If not, print the next question
  }
  questionIndex++;
  showNextQuestion();
}

// GO TO "ALL DONE" PAGE AND SHOW FINAL SCORE
function showFinalScore() { //Function to go to page when time out or quiz complete 
    quizContainer.style.display = "none"; // Hide Questions
    savedScore.style.display = "block"; // Show Final Score Page
  
    //console.log ("Your final score is " + secondsLeft); TO TEST, WORKS
    finalScoreIs.innerHTML = "Your final score is " + secondsLeft;
      
}

// ADD USERS NAME TO HIGHSCORE PAGE  
addNameBtn.addEventListener("click", function(event){
        event.preventDefault();
        var name = nameEl.value;
        var li = document.createElement ("li");
        li.id = players.length;
        li.innerHTML = name;
        players.push({name: name});
        highscoreListNames.append(li, secondsLeft);
        
        //ADDING HIGHSCORE TO HIGHSCORE PAGE IF ABOVE WERE TO GO ON ALL DONE PAGE
        // function makeScoreList() {
        //     var listItem = document.createElement("li");
        //     listItem.id = players.length;
        //     listItem.innerHTML = name;
        //     highscoreListNames.append(listItem);

        // };
        // makeScoreList();
});

// SHOW HIGHSCORE PAGE
anchor.addEventListener("click",function(){
    quizContainer.style.display = 'none';
    savedScore.style.display = 'none';
    displayStart.style.display = 'none';
    viewHighScores.style.display = 'block';   
});

// LEAVE HIGHSCORE PAGE TO GO BACK TO HOME PAGE
goBack.addEventListener("click", function() { // Go back to the home page
    displayStart.style.display = 'block';
    viewHighScores.style.display = 'none';   
});

// CLEAR HIGHSCORE BOARD
clearScore.addEventListener("click", function(){
    highscoreListNames.innerHTML='';    
});


//setTime(); /to test timer runs on page loads


startTimer.addEventListener("click", function() { 
    startQuiz()
});



