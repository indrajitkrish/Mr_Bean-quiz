var questions = [{
  question: "What is Mr Bean’s first name?" + "\n" + "a: Sean" + "\n" + "b: Baked " + "\n" + "c: Rowan" + "\n" + "d: We never find out" + "\n" + "-> ",
  answer: "d"
}, {
  question: "What is the name of Mr Bean's teddy bear?" + "\n" + "a: Eddie" + "\n" + "b: Teddy" + "\n" + "c: Colonel" + "\n" + "d: Bear" + "\n" + "-> ",
  answer: "b"
}, {
  question: "What year was Mr Bean first shown on TV?" + "\n" + "a: 1990" + "\n" + "b: 1992" + "\n" + "c: 1995" + "\n" + "d: 2000" + "\n" + "-> ",
  answer: "a"
}, {
  question: "What is Mr Bean’s girlfriend called? " + "\n" + "a:Irma Solb" + "\n" + "b:Irma Gobb" + "\n" + "c:Irma Godden" + "\n" + "-> ",
  answer: "b"
}, {
  question: "Mr Bean never speaks. True or False?" + "\n" + "a:True" + "\n" + "b: False" + "\n" + "-> ",
  answer: "b"
}, {
  question: "What car does Mr Bean drive?" + "\n" + "a: A Mini" + "\n" + "b:A Jeep" + "\n" + "c:A Toyota" + "\n" + "-> ",
  answer: "a"
}];

var readlinesync = require("readline-sync");
var highscore = [{
  name: "Mr.Bean",
  sco: "6"
}]

var ans = readlinesync.question("What's your name? ");
console.log("Welcome " + ans);
var score = 0;
console.log("...................................");
console.log("Enter the option(a/b/c) for answers.");
console.log("...................................");

var fan = readlinesync.question("Are You a True Mr Bean Fan? (Yes/No)");


function play(ques, answ) {
  var answerrrr = readlinesync.question(ques)
  if (answ.toUpperCase() === answerrrr.toUpperCase()) {
    console.log("You are Right! :) ");
    score++;
  }
  else
    console.log("You are Wrong");
}
//console.log(questions.length);
if (fan.toUpperCase() == "YES") {
  for (i = 0; i < questions.length; i++) {
    var s = questions[i];
    play(s.question, s.answer);
  }
  console.log("--------------------------------------------------");
  console.log("Your Score:" + score + " out of 6");
  console.log("--------------------------------------------------");
  for (i = 0; i < highscore.length; i++) {
    var k = i;
    console.log("Here others on the list");
    console.log("Name: " + highscore[i].name);
    console.log("Score: " + highscore[i].sco);
  }
  console.log("Ping me your score");
}
else
  console.log("Thank you for visiting my app");