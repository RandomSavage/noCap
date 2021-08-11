console.log("Connected") 

function gameStart() {
  let score = 0

  fetch("https://jservice.io/api/clues?category=267")
  .then(response => response.json())
  .then(data => {
    let gameScreen = document.createElement('form')

    let ranNum = Math.floor(Math.random() * 10)

    let labelQuest = document.createElement('label')
    labelQuest.innerText = "Question: "
    gameScreen.append(labelQuest)

    let question = document.createElement('h2')
    question.innerText = data[ranNum].question
    gameScreen.append(question)

    let answer = ""
    let userInput = document.createElement('input')
    let inputBtn = document.createElement('button')
    inputBtn.innerText = 'Submit'

    inputBtn.addEventListener('click', function(e) {
      e.preventDefault()
      answer = userInput.value
      if(answer === data[ranNum].answer.trim().toLowerCase()) {
        gameScreen.append(userInput)
        gameScreen.append(inputBtn)
        let labelAnswer = document.createElement('label')
        labelAnswer.innerText = `Answer: `
        gameScreen.append(labelAnswer)

        let answerBox = document.createElement('h2')
        answerBox.innerText = answer
        gameScreen.append(answerBox)
        let scoreBox = document.createElement('p')
        score += 1
        scoreBox.innerText = score
        gameScreen.append(scoreBox)
        setTimeout(function() {
          gameScreen.remove()
          gameStart()
        }, 2000)
      }else {
        gameScreen.append(userInput)
        gameScreen.append(inputBtn)
        let labelAnswer = document.createElement('label')
        labelAnswer.innerText = `Answer: `
        gameScreen.append(labelAnswer)

        let answerBox = document.createElement('h2')
        answerBox.innerText = "You answered incorrectly, sorry."
        gameScreen.append(answerBox)

        score = 0
        let scoreBox = document.createElement('p')
        scoreBox.innerText = score
        gameScreen.append(scoreBox)

        setTimeout(function() {
          gameScreen.remove()
          gameStart()
        }, 2000)
      }

  

    })
    gameScreen.append(userInput)
    gameScreen.append(inputBtn)
    let score = 0
    let scoreBox = document.createElement('p')
    scoreBox.innerText = score
    gameScreen.append(scoreBox)



    



    document.body.append(gameScreen)

    // console.log(data)
  })
}

let startBtn = document.createElement('button')
startBtn.innerText = 'Start Game'
startBtn.addEventListener('click', gameStart)
document.body.append(startBtn)



// fetch("https://jservice.io/api/clues?category=267")
//   .then(response => response.json())
//   .then(data => console.log(data))
