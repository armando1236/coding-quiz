const questionsAnswers = [
    {
        q:Commonly used data types DO NOT include:
        pa1: "Number",
        pa2: "String",
        pa3: "Boolean",
        pa4: "Color",
        correct: "Color"
    }

    {
        q: "What does Nan stand for?"
        pa1: "no and no",
        pa2: "Not a Number",
        pa3: "Not an Nose",
        correct: "Not a Number"
    }

    {
        q: "Github is a good to _____."
        pa1: "Design websites",
        pa2: "Work on math homework",
        pa3: "Upload your work",
        pa4: "chat with friends",
        correct: "Upload your work"
    }
]

var timerInterval = setInterval(function(){
    timerCount --;
    timerElement.innerHTML = timerCount;
    if(timerCount === 0){
      clearInterval(timerInterval);
      loseGame();
    }
    if(isWin){
      clearInterval(timerInterval);
    };
  },1000)
