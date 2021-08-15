"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("Connected");

var noCap =
/*#__PURE__*/
function () {
  function noCap(score) {
    _classCallCheck(this, noCap);

    noCap.score = score;
    noCap.clues = [];

    noCap.gameStart = function () {
      var ranCat = Math.floor(Math.random() * 10);
      var myCat = {
        0: {
          id: 218,
          category: 'Science & Nature'
        },
        1: {
          id: 50,
          category: 'U.S. History'
        },
        2: {
          id: 7,
          category: 'U.S. Cities'
        },
        3: {
          id: 136,
          category: 'Stupid Answers'
        },
        4: {
          id: 42,
          category: 'Sports'
        },
        5: {
          id: 21,
          category: 'Animals'
        },
        6: {
          id: 105,
          category: '3 Letter Words'
        },
        7: {
          id: 67,
          category: 'Television'
        },
        8: {
          id: 1114,
          category: 'Annual Events'
        },
        9: {
          id: 49,
          category: 'Food'
        }
      }; // return(

      fetch("https://jservice.io/api/clues?category=".concat(myCat[ranCat].id)).then(function (response) {
        return response.json();
      }).then(function (data) {
        noCap.clues.push(data);
        var gameScreen = document.createElement('form');
        var ranNum = Math.floor(Math.random() * 100 + 1);
        var labelQuest = document.createElement('label');
        labelQuest.innerText = myCat[ranCat].category;
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

          if (answer.trim().toLowerCase() === data[ranNum].answer.trim().toLowerCase()) {
            gameScreen.append(userInput);
            gameScreen.append(inputBtn);
            var labelAnswer = document.createElement('label');
            labelAnswer.innerText = "Answer: ";
            gameScreen.append(labelAnswer);
            var answerBox = document.createElement('h2');
            answerBox.innerText = answer;
            gameScreen.append(answerBox);
            var scoreBox = document.createElement('p');
            noCap.score += 1;
            scoreBox.innerText = noCap.score;
            gameScreen.append(scoreBox);
            setTimeout(function () {
              gameScreen.remove();
              noCap.gameStart();
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

            var _scoreBox = document.createElement('p');

            _scoreBox.innerText = noCap.score;
            gameScreen.append(_scoreBox);
            setTimeout(function () {
              gameScreen.remove();
              noCap.gameStart();
            }, 2000);
          }
        });
        gameScreen.append(userInput);
        gameScreen.append(inputBtn); // let score = 0
        // let scoreBox = document.createElement('p')
        // scoreBox.innerText = score
        // gameScreen.append(scoreBox)

        document.body.append(gameScreen); // console.log(data)
      });
    };
  }

  _createClass(noCap, [{
    key: "gameStart",
    get: function get() {
      return this.constructor.gameStart;
    }
  }, {
    key: "score",
    get: function get() {
      return this.constructor.score;
    }
  }, {
    key: "clues",
    get: function get() {
      return this.constructor.clues;
    }
  }]);

  return noCap;
}();

var newGame = new noCap(100);
var startBtn = document.createElement('button');
startBtn.innerText = 'Start Game';
startBtn.addEventListener('click', newGame.gameStart);
document.body.append(startBtn);
console.log(newGame.clues);
var x = newGame.score;
console.log(x); // fetch("https://jservice.io/api/clues?category=267")
//   .then(response => response.json())
//   .then(data => console.log(data))