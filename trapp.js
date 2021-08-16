class noCap {
  
  constructor(score) {
    noCap.score = score
    noCap.ranCat = function() { 
      return Math.floor(Math.random() * 10)
    }
    noCap.mixer = Math.floor(Math.random() * 10)  
    noCap.myCat = {
      0: {id: 218, category: 'Science & Nature'},
      1: {id: 50, category: 'U.S. History'},
      2: {id: 7, category: 'U.S. Cities'},
      3: {id: 136, category: 'Stupid Answers'},
      4: {id: 42, category: 'Sports'},
      5: {id: 21, category: 'Animals'},
      6: {id: 105, category: '3 Letter Words'},
      7: {id: 67, category: 'Television'},
      8: {id: 1114, category: 'Annual Events'},
      9: {id: 49, category: 'Food'}
    }
    noCap.sameQuestions = true
    noCap.clues = []

    noCap.getClues = function() {fetch(`https://jservice.io/api/clues?category=${noCap.myCat[noCap.mixer].id}`)
    .then(response => response.json())
    .then(data => noCap.clues.push(data))
  }

  noCap.getClues()
    noCap.gameStart = function() {


      // noCap.getClues()
      let x = document.querySelector('body')
      let gameScreen = document.createElement('form')
        
      let ranNum = Math.floor(Math.random() * 100)
      console.log(` cat: ${noCap.clues[0][ranNum]}`)
      
      let labelQuest = document.createElement('label')
      labelQuest.innerText = noCap.myCat[noCap.ranCat()].category
      gameScreen.append(labelQuest)
  
      let question = document.createElement('h2')
      question.innerText = noCap.clues[0][ranNum].question
      // question.innerText = "noCap.clues[ranNum].question"
      gameScreen.append(question)
  
      let answer = ""
      let userInput = document.createElement('input')
      let inputBtn = document.createElement('button')
      inputBtn.innerText = 'Submit'
  
      inputBtn.addEventListener('click', function(e) {
        e.preventDefault()
        answer = userInput.value
        if(answer.trim().toLowerCase() === noCap.clues[0][ranNum].answer.trim().toLowerCase()) {
          gameScreen.append(userInput)
          gameScreen.append(inputBtn)
          let labelAnswer = document.createElement('label')
          labelAnswer.innerText = `Answer: `
          gameScreen.append(labelAnswer)
  
          let answerBox = document.createElement('h2')
          answerBox.innerText = answer
          gameScreen.append(answerBox)
          let scoreBox = document.createElement('p')
          noCap.score += 1
          scoreBox.innerText = noCap.score
          gameScreen.append(scoreBox)
          setTimeout(function() {
            gameScreen.remove()
            noCap.gameStart()
          }, 2000)
  
        }else {
          // noCap.getClues()
          // noCap.sameQuestions = false
          gameScreen.append(userInput)
          gameScreen.append(inputBtn)
          let labelAnswer = document.createElement('label')
          labelAnswer.innerText = `Answer: `
          gameScreen.append(labelAnswer)
  
          let answerBox = document.createElement('h2')
          answerBox.innerText = "You answered incorrectly, sorry."
          gameScreen.append(answerBox)
  
          let scoreBox = document.createElement('p')
          scoreBox.innerText = noCap.score
          gameScreen.append(scoreBox)
  
          setTimeout(function() {
            gameScreen.remove()
            noCap.gameReset()
          }, 5000)

        }
      })
      gameScreen.append(userInput)
      gameScreen.append(inputBtn)
      // let score = 0
      // let scoreBox = document.createElement('p')
      // scoreBox.innerText = score
      // gameScreen.append(scoreBox)
      document.body.append(gameScreen)
  
      // console.log(data)
    
  }
  noCap.gameReset = function() {
    // noCap.getClues()

    let cats = []
    let ranCat = Math.floor(Math.random() * 10)
    let newQuestion = function() {fetch(`https://jservice.io/api/clues?category=${noCap.myCat[noCap.mixer].id}`)
    .then(response => response.json())
    .then(data => cats.push(data))
  }
  console.log(`cattys: ${cats}`)
    // newQuestion()
    let x = document.querySelector('body')
    let gameScreen = document.createElement('form')
      
    let ranNum = Math.floor(Math.random() * 100)
    // console.log(` cat: ${cats[0][ranNum]}`)
    
    let labelQuest = document.createElement('label')
    labelQuest.innerText = noCap.myCat[noCap.ranCat()].category
    gameScreen.append(labelQuest)

    let question = document.createElement('h2')
    question.innerText = noCap.clues[0][ranNum].question

    // question.innerText = cats[0][ranNum].question
    gameScreen.append(question)

    let answer = ""
    let userInput = document.createElement('input')
    let inputBtn = document.createElement('button')
    inputBtn.innerText = 'Submit'

    inputBtn.addEventListener('click', function(e) {
      e.preventDefault()
      answer = userInput.value
      if(answer.trim().toLowerCase() === noCap.clues[0][ranNum].answer.trim().toLowerCase()) {
        gameScreen.append(userInput)
        gameScreen.append(inputBtn)
        let labelAnswer = document.createElement('label')
        labelAnswer.innerText = `Answer: `
        gameScreen.append(labelAnswer)

        let answerBox = document.createElement('h2')
        answerBox.innerText = answer
        gameScreen.append(answerBox)
        let scoreBox = document.createElement('p')
        noCap.score += 1
        scoreBox.innerText = noCap.score
        gameScreen.append(scoreBox)
        setTimeout(function() {
          gameScreen.remove()
          noCap.gameReset()
        }, 2000)

      }else {
        // noCap.getClues()
        // noCap.sameQuestions = false
        gameScreen.append(userInput)
        gameScreen.append(inputBtn)
        let labelAnswer = document.createElement('label')
        labelAnswer.innerText = `Answer: `
        gameScreen.append(labelAnswer)

        let answerBox = document.createElement('h2')
        answerBox.innerText = "You answered incorrectly, sorry."
        gameScreen.append(answerBox)

        let scoreBox = document.createElement('p')
        scoreBox.innerText = noCap.score
        gameScreen.append(scoreBox)

        setTimeout(function() {
          gameScreen.remove()
          
          noCap.gameStart()
        }, 5000)

      }
    })
    gameScreen.append(userInput)
    gameScreen.append(inputBtn)
    // let score = 0
    // let scoreBox = document.createElement('p')
    // scoreBox.innerText = score
    // gameScreen.append(scoreBox)
    document.body.append(gameScreen)

    // console.log(data)
  
}
  }





  get gameStart() {
    return this.constructor.gameStart
  }

  get clues() {
    return this.constructor.clues
  }

  set clues(cats) {
    newClues()
    return this.clues = [...this.clues, cats]
  }
}


let newGame = new noCap(100)
let startBtn = document.createElement('button')
startBtn.innerText = 'Start Game'
startBtn.addEventListener('click', newGame.gameStart)
document.body.append(startBtn)

console.log(` oops:}`)