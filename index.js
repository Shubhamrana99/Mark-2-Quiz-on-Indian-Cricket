// Quiz on Indian Cricket

var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Hey buddy! My name is Shubham, What is youe name? ");
console.log("Hi", userName, ", Let's check your cricket knowledge ");

function play(question, ans) {
  var myQuestion = readlineSync.question(question);

  if (myQuestion === ans) {
    console.log("Right Answer");
    score++;
    console.log("Your score: ", score);
  }
  else {
    console.log("Wrong Answer");
    score--;
    console.log("Your score: ", score);
  }
}

var question1 = {
  question: "In how many World Cups did the Indian cricket team participate?\n (a)11\n (b)12\n (c)13\n ",
  answer: "b",
}
var question2 = {
  question: "What colour shirt does the Rajasthan Royals IPL cricket team wear? \n (a)Pink and green\n (b)Red and blue\n (c)Pink and blue\n",
  answer: "c",
}
var question3 = {
  question: "What is the main colour of the Chennai Super Kings team shirt?\n (a)Yellow\n (b)Blue\n (c)Orange\n",
  answer: "a",
}
var question4 = {
  question: "Which team won the most champion titles in IPL?\n (a)Mumbai Indians\n (b)Chennai Super Kings\n (c)Kolkata Knight Riders\n",
  answer: "a",
}
var question5 = {
  question: "What colour caps do the Indian cricket team wear?\n (a)Blue\n (b)Dark blue\n (c)Navy blue\n",
  answer: "c",
}

var allQuestions = [question1, question2, question3, question4, question5]

for (let i = 0; i < allQuestions.length; i++) {
  play(allQuestions[i].question, allQuestions[i].answer);
  console.log("--------------------------");
}


console.log("oh! You SCORED:", score, ",Not bad!");


var highScore = [  {
    name: "shubham",
    score: ":5",
  },
  {
    name: userName,
    score: ":" + score,
  }
]

for (let j = 0; j < highScore.length; j++)   {
    console.log(highScore[j].name, highScore[j].score);
  }