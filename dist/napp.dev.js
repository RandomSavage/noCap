"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("Connected");

var noCap =
/*#__PURE__*/
function () {
  function noCap(score, clues, ranCat, ranNum, retrieveScore) {
    _classCallCheck(this, noCap);

    noCap.score = score;
    noCap.clues = ['hello'];
    noCap.ranCat = Math.floor(Math.random() * 10);
    noCap.ranNum = Math.floor(Math.random() * 100);
    noCap.retrieveScore = this.gameStart.bind(noCap);
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
  }

  _createClass(noCap, [{
    key: "gameStart",
    value: function gameStart() {
      fetch("https://jservice.io/api/clues?category=".concat(noCap.myCat[noCap.ranCat].id)).then(function (response) {
        return response.json();
      }).then(function (data) {
        noCap.clues.push(data);
        console.log(data);
      });
    } //         let gameScreen = document.createElement('form')
    //         let ranNum = Math.floor(Math.random() * 100 + 1)
    //         let labelQuest = document.createElement('label')
    //         labelQuest.innerText = myCat[ranCat].category
    //         gameScreen.append(labelQuest)
    //         let question = document.createElement('h2')
    //         question.innerText = data[ranNum].question
    //         gameScreen.append(question)
    //         let answer = ""
    //         let userInput = document.createElement('input')
    //         let inputBtn = document.createElement('button')
    //         inputBtn.innerText = 'Submit'
    //         inputBtn.addEventListener('click', function(e) {
    //           e.preventDefault()
    //           answer = userInput.value
    //           if(answer.trim().toLowerCase() === data[ranNum].answer.trim().toLowerCase()) {
    //             gameScreen.append(userInput)
    //             gameScreen.append(inputBtn)
    //             let labelAnswer = document.createElement('label')
    //             labelAnswer.innerText = `Answer: `
    //             gameScreen.append(labelAnswer)
    //             let answerBox = document.createElement('h2')
    //             answerBox.innerText = answer
    //             gameScreen.append(answerBox)
    //             let scoreBox = document.createElement('p')
    //             score += 1
    //             scoreBox.innerText = score
    //             gameScreen.append(scoreBox)
    //             setTimeout(function() {
    //               gameScreen.remove()
    //               self.gameStart()
    //             }, 2000)
    //           }else {
    //             gameScreen.append(userInput)
    //             gameScreen.append(inputBtn)
    //             let labelAnswer = document.createElement('label')
    //             labelAnswer.innerText = `Answer: `
    //             gameScreen.append(labelAnswer)
    //             let answerBox = document.createElement('h2')
    //             answerBox.innerText = "You answered incorrectly, sorry."
    //             gameScreen.append(answerBox)
    //             let scoreBox = document.createElement('p')
    //             scoreBox.innerText = score
    //             gameScreen.append(scoreBox)
    //             setTimeout(function() {
    //               gameScreen.remove()
    //               self.gameStart()
    //             }, 2000)
    //           }
    //         })
    //         gameScreen.append(userInput)
    //         gameScreen.append(inputBtn)
    //         // let score = 0
    //         // let scoreBox = document.createElement('p')
    //         // scoreBox.innerText = score
    //         // gameScreen.append(scoreBox)
    //         document.body.append(gameScreen)
    //         // console.log(data)
    //     }
    // }

  }, {
    key: "clues",
    get: function get() {
      return this.constructor.clues;
    }
  }]);

  return noCap;
}();

var newGame = new noCap(0);
var startBtn = document.createElement('button');
startBtn.innerText = 'Start Game';
startBtn.addEventListener('click', newGame.gameStart);
document.body.append(startBtn); // console.log(newGame.retrieveScore)

console.log("GReat: ".concat(newGame.clues)); // fetch("https://jservice.io/api/clues?category=267")
//   .then(response => response.json())
//   .then(data => console.log(data))