const questionsAnswers = [
    {
        q:Commonly used data types DO NOT include:
        pa1: "Number",
        pa2: "String",
        pa3: "Boolean",
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
        q: ""
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
From mini-project