var startButton = document.getElementById('start')
var introText = document.getElementById('intro')
var queContainer = document.getElementById('question-container') 

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', blankScreen)


function startGame() {
    startButton.classList.add('hide')
}

function blankScreen() {
    introText.classList.add('hide')
    queContainer.classList.add('appear')
}






var questionsAnswers = [
    {
        question:"Commonly used data types DO NOT include:",
            answers: [
                {text: "color", correct:true}
                {text: "number", correct:false}
                {text: "string", correct:false}
                {text: "boolean", correct:false}
            ]
        },
        {
            question:"What does Nan stand for?",
                answers: [
                    {text: "Neither a Number", correct:false}
                    {text: "no and no", correct:false}
                    {text: "Not an Nose", correct:false}
                    {text: "Not a Number", correct:true}
                ]
            },

            










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