"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var noCap =
/*#__PURE__*/
function () {
  function noCap(score) {
    _classCallCheck(this, noCap);

    noCap.score = score;

    noCap.ranCat = function () {
      return Math.floor(Math.random() * 10);
    };

    noCap.mixer = Math.floor(Math.random() * 10);
    noCap.myCat = {
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
    };
    noCap.sameQuestions = true;
    noCap.clues = [];

    noCap.getClues = function () {
      fetch("https://jservice.io/api/clues?category=".concat(noCap.myCat[noCap.mixer].id)).then(function (response) {
        return response.json();
      }).then(function (data) {
        return noCap.clues.push(data);
      });
    };

    noCap.getClues();

    noCap.gameStart = function () {
      // noCap.getClues()
      var x = document.querySelector('body');
      var gameScreen = document.createElement('form');
      var ranNum = Math.floor(Math.random() * 100);
      console.log(" cat: ".concat(noCap.clues[0][ranNum]));
      var labelQuest = document.createElement('label');
      labelQuest.innerText = noCap.myCat[noCap.ranCat()].category;
      gameScreen.append(labelQuest);
      var question = document.createElement('h2');
      question.innerText = noCap.clues[0][ranNum].question; // question.innerText = "noCap.clues[ranNum].question"

      gameScreen.append(question);
      var answer = "";
      var userInput = document.createElement('input');
      var inputBtn = document.createElement('button');
      inputBtn.innerText = 'Submit';
      inputBtn.addEventListener('click', function (e) {
        e.preventDefault();
        answer = userInput.value;

        if (answer.trim().toLowerCase() === noCap.clues[0][ranNum].answer.trim().toLowerCase()) {
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
          // noCap.getClues()
          // noCap.sameQuestions = false
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
            noCap.gameReset();
          }, 5000);
        }
      });
      gameScreen.append(userInput);
      gameScreen.append(inputBtn); // let score = 0
      // let scoreBox = document.createElement('p')
      // scoreBox.innerText = score
      // gameScreen.append(scoreBox)

      document.body.append(gameScreen); // console.log(data)
    };

    noCap.gameReset = function () {
      // noCap.getClues()
      var cats = [];
      var ranCat = Math.floor(Math.random() * 10);

      var newQuestion = function newQuestion() {
        fetch("https://jservice.io/api/clues?category=".concat(noCap.myCat[noCap.mixer].id)).then(function (response) {
          return response.json();
        }).then(function (data) {
          return cats.push(data);
        });
      };

      console.log("cattys: ".concat(cats)); // newQuestion()

      var x = document.querySelector('body');
      var gameScreen = document.createElement('form');
      var ranNum = Math.floor(Math.random() * 100); // console.log(` cat: ${cats[0][ranNum]}`)

      var labelQuest = document.createElement('label');
      labelQuest.innerText = noCap.myCat[noCap.ranCat()].category;
      gameScreen.append(labelQuest);
      var question = document.createElement('h2');
      question.innerText = noCap.clues[0][ranNum].question; // question.innerText = cats[0][ranNum].question

      gameScreen.append(question);
      var answer = "";
      var userInput = document.createElement('input');
      var inputBtn = document.createElement('button');
      inputBtn.innerText = 'Submit';
      inputBtn.addEventListener('click', function (e) {
        e.preventDefault();
        answer = userInput.value;

        if (answer.trim().toLowerCase() === noCap.clues[0][ranNum].answer.trim().toLowerCase()) {
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
            noCap.gameReset();
          }, 2000);
        } else {
          // noCap.getClues()
          // noCap.sameQuestions = false
          gameScreen.append(userInput);
          gameScreen.append(inputBtn);

          var _labelAnswer2 = document.createElement('label');

          _labelAnswer2.innerText = "Answer: ";
          gameScreen.append(_labelAnswer2);

          var _answerBox2 = document.createElement('h2');

          _answerBox2.innerText = "You answered incorrectly, sorry.";
          gameScreen.append(_answerBox2);

          var _scoreBox2 = document.createElement('p');

          _scoreBox2.innerText = noCap.score;
          gameScreen.append(_scoreBox2);
          setTimeout(function () {
            gameScreen.remove();
            noCap.gameStart();
          }, 5000);
        }
      });
      gameScreen.append(userInput);
      gameScreen.append(inputBtn); // let score = 0
      // let scoreBox = document.createElement('p')
      // scoreBox.innerText = score
      // gameScreen.append(scoreBox)

      document.body.append(gameScreen); // console.log(data)
    };
  }

  _createClass(noCap, [{
    key: "gameStart",
    get: function get() {
      return this.constructor.gameStart;
    }
  }, {
    key: "clues",
    get: function get() {
      return this.constructor.clues;
    },
    set: function set(cats) {
      newClues();
      return this.clues = [].concat(_toConsumableArray(this.clues), [cats]);
    }
  }]);

  return noCap;
}();

var newGame = new noCap(100);
var startBtn = document.createElement('button');
startBtn.innerText = 'Start Game';
startBtn.addEventListener('click', newGame.gameStart);
document.body.append(startBtn);
console.log(" oops:}");