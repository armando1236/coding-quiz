
var timeEl = document.querySelector(".time");
var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "Time";

    if(secondsLeft <= 0 || currentQuestionIndex >= questions.length) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }

  }, 1000);
}



var startButton = document.getElementById('start')
var introText = document.getElementById('intro')
// var queContainer = document.getElementById('question-container') 
var questionElement = document.getElementById('question-container')
var questionText = document.getElementById('question-text')
var answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', blankScreen)


function startGame() {
    setTime();
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    showQuestion()
}

function blankScreen() {
    introText.classList.add('hide')
    // queContainer.classList.add('appear')
}


function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
    questionText.innerText = questions[currentQuestionIndex].question;
    var answersArrEl = document.getElementsByClassName('btn')
    console.log(answersArrEl)
    answerButtonElement.setAttribute("class", "")
    for(i=0; i<answersArrEl.length; i++){
        answersArrEl[i].textContent = questions[currentQuestionIndex].answers[i].text;
        answersArrEl[i].setAttribute("data-correct", questions[currentQuestionIndex].answers[i].correct)
        answersArrEl[i].addEventListener("click", checkAnswer)
    }
}

function checkAnswer(e) {
    var userChoice = e.target.dataset.correct;
    if(userChoice == "true"){
        console.log("nice")
    }else {
        console.log("bad")
        secondsLeft -=10;
    }
    currentQuestionIndex++;

    if(currentQuestionIndex<questions.length) {
        showQuestion()
    }

}

var questions = [
    {
        question:"Commonly used data types DO NOT include",
            answers: [
                {text: "color", correct:true},
                {text: "number", correct:false},
                {text: "string", correct:false},
                {text: "boolean", correct:false}
            ]
        },
        {
            question:"What does Nan stand for?",
                answers: [
                    {text: "Neither a Number", correct:false},
                    {text: "no and no", correct:false},
                    {text: "Not a Nose", correct:false},
                    {text: "Not a Number", correct:true}
                ]
        },
        {
            question:"Github is good for ______",
                answers: [
                    {text: "Designing websites", correct:false},
                    {text: "Working on algorithms", correct:false},
                    {text: "Saving your work to the cloud", correct:true},
                    {text: "Connecting with friends", correct:false}
                ]
            }
        ]

            










// var questionsAnswers = [

//         {
//             q:"Commonly used data types DO NOT include:"
//             pa1: "Number",
//             pa2: "String",
//             pa3: "Boolean",
//             pa4: "Color",
//             correct: "Color"
//         }
    
//         {
//             q: "What does Nan stand for?"
//             pa1: "no and no",
//             pa2: "Not a Number",
//             pa3: "Not an Nose",
//             correct: "Not a Number"
//         }
    
//         {
//             q: "Github is good for ______"
//             pa1: "Designing websites",
//             pa2: "Working on math homework",
//             pa3: "Uploading your work",
//             pa4: "chatting with friends",
//             correct: "Upload your work"
//         }
//     ];