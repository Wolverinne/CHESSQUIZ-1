console.log("This is a Chess quiz,Dive right in to check your chess knowledge.")
var readlineSync = require("readline-sync");

var score = 0;


var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to the CHESSQUIZ");





function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("*************")
}

// array of objects
var questions = [{
  question: "How many pieces are there on a chess Board?",
  answer: "16"
}, {
  question: "How many Squares are there on a chess Board?",
  answer: "64"
},
{
  question: "Who is the current Chess world champion? ",
  answer: "magnus carlsesn"
}, {
  question: "Who is India's number 1 in chess?",
  answer: "vishwanathan anand"
},
{
  question: "Who led India to it's maiden FIDE nations cup victory recently? ",
  answer: "vidit gujarathi"
},];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);
var highScores = [
  {
    name: "Parth",
    score: 5,
  },
  {
    name: "Sarthak",
    score: 4,
  },

  {
    name: "Palak",
    score: 3,
  },
  {
    name: userName,
    score: score,
  },

]

console.log("Check out the scores",highScores)