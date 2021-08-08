var readlineSync = require("readline-sync"); //installing readlinesync package
var score=0;
//taking name of the user
var name = readlineSync.question("What is your name? ");
//welcome message
console.log("welcome "+name+"!"+" Let us see if you know Naga");

//fucntions

var hiscore = [
  {
    name: "Naga",
    score: 3,
  },

  {
    name: "Satya",
    score: 1,
  },
]
function play(question,answer) //defined a function called play and gave parameters
{
  var ans = readlineSync.question(question);
  if(ans == answer)
  {
    console.log("you are correct!");
    score++
  }
  else
  {
    console.log("you are wrong");
    score--
  }
  console.log("your score is "+ score);
}


//array

var questions = 
[{
    question:"where is my college located? ",
    answer:"bapatla",
 },
 {
  question:"Who is my favorite hero? ",
  answer:"ironman",
 },
 {
  question:"What is my favorite color? ",
  answer:"red",
 }

]

//loop
 
 for (var i=0;i<questions.length;i++)
 { 
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
 }

function scores() 
{
  console.log("These are the high scores, let me know if I should update them");

  hiscore.map(score => console.log(score.name, " : ", score.score))
}

scores();
