"use strict";

console.log("Connected");

function gameStart() {
  var score = 0;
  fetch("https://jservice.io/api/clues?category=267").then(function (response) {
    return response.json();
  }).then(function (data) {
    var gameScreen = document.createElement('form');
    var ranNum = Math.floor(Math.random() * 10);
    var labelQuest = document.createElement('label');
    labelQuest.innerText = "Question: ";
    gameScreen.append(labelQuest);
    var question = document.createElement('h2');
    question.innerText = data[ranNum].question;
    gameScreen.append(question);
    var answer = "";
    var userInput = document.createElement('input');
    var inputBtn = document.createElement('button');
    inputBtn.innerText = 'Submit';
    inputBtn.addEventListener('click', function (e) {
      e.preventDefault();
      answer = userInput.value;

      if (answer === data[ranNum].answer.trim().toLowerCase()) {
        gameScreen.append(userInput);
        gameScreen.append(inputBtn);
        var labelAnswer = document.createElement('label');
        labelAnswer.innerText = "Answer: ";
        gameScreen.append(labelAnswer);
        var answerBox = document.createElement('h2');
        answerBox.innerText = answer;
        gameScreen.append(answerBox);

        var _scoreBox = document.createElement('p');

        score += 1;
        _scoreBox.innerText = score;
        gameScreen.append(_scoreBox);
        setTimeout(function () {
          gameScreen.remove();
          gameStart();
        }, 2000);
      } else {
        gameScreen.append(userInput);
        gameScreen.append(inputBtn);

        var _labelAnswer = document.createElement('label');

        _labelAnswer.innerText = "Answer: ";
        gameScreen.append(_labelAnswer);

        var _answerBox = document.createElement('h2');

        _answerBox.innerText = "You answered incorrectly, sorry.";
        gameScreen.append(_answerBox);
        score = 0;

        var _scoreBox2 = document.createElement('p');

        _scoreBox2.innerText = score;
        gameScreen.append(_scoreBox2);
        setTimeout(function () {
          gameScreen.remove();
          gameStart();
        }, 2000);
      }
    });
    gameScreen.append(userInput);
    gameScreen.append(inputBtn);
    var score = 0;
    var scoreBox = document.createElement('p');
    scoreBox.innerText = score;
    gameScreen.append(scoreBox);
    document.body.append(gameScreen); // console.log(data)
  });
}

var startBtn = document.createElement('button');
startBtn.innerText = 'Start Game';
startBtn.addEventListener('click', gameStart);
document.body.append(startBtn); // fetch("https://jservice.io/api/clues?category=267")
//   .then(response => response.json())
//   .then(data => console.log(data))