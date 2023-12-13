const humanResultEl = document.querySelector('#humanResult')
const compResultEl = document.querySelector('#compResult')
const spanCompEl = document.querySelector('#spanComp')
const resultTxtEl = document.querySelector('#resultTxt')
const scoreEl = document.querySelector('#score')
const loadChoices = document.querySelector('.choices')
const resetBtnEl = document.querySelector('#resetBtn')
let resetScore = 0
let scoreNum = localStorage.getItem('savedScoreNum')


if(scoreNum === null){
    scoreEl.innerHTML = `Score: 0`
} else {
    scoreEl.innerHTML = `Score: ${scoreNum}`
}


// On-click Event
const btnRock = document.querySelector('#btn-rock')
btnRock.addEventListener('click', playGame.bind(null, 'rock'))
btnRock.addEventListener('click', () => {
    btnRock.classList.add('test')
})

const btnPaper = document.querySelector('#btn-paper')
btnPaper.addEventListener('click', playGame.bind(null, 'paper'))

const btnScissor = document.querySelector('#btn-scissor')
btnScissor.addEventListener('click', playGame.bind(null, 'scissor'))

// Play the game
function playGame(choice){
    const compNum = Math.floor(Math.random()*3)
    let humanTurn = choice
    let compTurn
    let result

    // if (compNum >= 0 && compNum <= 3.3){
    //     compTurn = 'rock'
    // } else if (compNum > 3.3 && compNum <= 6.6){
    //     compTurn = 'paper'
    // } else {
    //     compTurn = 'scissor'
    // }

    if (compNum === 0){
        compTurn = 'rock'
    } else if (compNum === 1){
        compTurn = 'paper'
    } else {
        compTurn = 'scissor'
    }

    console.log(compNum)

    switch (true){
        case humanTurn === compTurn:                  
            result = "It's a tie"
            break;
        case humanTurn === 'rock' && compTurn === 'paper' || humanTurn === 'scissor' && compTurn === 'rock' || humanTurn === 'paper' && compTurn === 'scissor':
            result = 'You lose'
            if(scoreNum === 0){
                scoreNum = resetScore--
                localStorage.setItem('savedScoreNum', scoreNum)
            } else if (scoreNum == localStorage.getItem('savedScoreNum')){
                scoreNum--
                localStorage.setItem('savedScoreNum', scoreNum)
            }            
            break;
        case compTurn === 'rock' && humanTurn === 'paper' || compTurn === 'scissor' && humanTurn === 'rock' || compTurn === 'paper' && humanTurn === 'scissor':
            result = 'You win'

            if(scoreNum === 0){
                scoreNum = resetScore++
                localStorage.setItem('savedScoreNum', scoreNum)
            } else if (scoreNum == localStorage.getItem('savedScoreNum')){
                scoreNum++
                localStorage.setItem('savedScoreNum', scoreNum)
            }
            break;          
    }

    // localStorage.setItem(savedScoreNum, scoreNum)
    // console.log(localStorage.getItem(savedScoreNum))
    // console.log(scoreNum)

    loadChoices.addEventListener('click', () => {
        humanResultEl.setAttribute('class', 'fa-solid fa-spinner fa-spin-pulse')
        humanResultEl.setAttribute('style', 'color: #ffff')
        compResultEl.setAttribute('class', 'fa-solid fa-spinner fa-spin-pulse')
        compResultEl.setAttribute('style', 'color: #ffff')
    })

    setTimeout(changeToAns, 1000)

    function changeToAns(){
        if (humanTurn === 'paper') {
            humanResultEl.setAttribute('class', 'fa-solid fa-hand fa-rotate-90')
            humanResultEl.setAttribute('style', 'color: #ffdbac')
        } else if (humanTurn === 'rock') {
            humanResultEl.setAttribute('class', 'fa-solid fa-hand-back-fist fa-rotate-90')
            humanResultEl.setAttribute('style', 'color: #ffdbac')
        } else if (humanTurn === 'scissor') {
            humanResultEl.setAttribute('class', 'fa-solid fa-hand-scissors fa-rotate-180 fa-flip-horizontal')
            humanResultEl.setAttribute('style', 'color: #ffdbac')
        }

        if (compTurn === 'paper') {
            spanCompEl.setAttribute('class', 'fa-rotate-90')
            compResultEl.setAttribute('class', 'fa-solid fa-hand fa-flip-vertical')
            compResultEl.setAttribute('style', 'color: #ffdbac')
        } else if (compTurn === 'rock') {
            spanCompEl.setAttribute('class', 'fa-rotate-270')
            compResultEl.setAttribute('class', 'fa-solid fa-hand-back-fist fa-flip-horizontal')
            compResultEl.setAttribute('style', 'color: #ffdbac')
        } else if (compTurn === 'scissor') {
            spanCompEl.setAttribute('class', 'fa-rotate-180')
            compResultEl.setAttribute('class', 'fa-solid fa-hand-scissors fa-flip-both')
            compResultEl.setAttribute('style', 'color: #ffdbac')
        }
        
        resultTxtEl.innerHTML = `${result}`
        scoreEl.innerHTML = `Score: ${scoreNum}`
    }
    
}

resetBtnEl.addEventListener('click', () => {
    localStorage.setItem('savedScoreNum', '0')
    scoreNum = localStorage.getItem('savedScoreNum')
    scoreEl.innerHTML = `Score: ${scoreNum}`
})

// JSON
// const myObj = {
//     nama: 'ryan',
//     umur: 19
// }

// localStorage.setItem('myObj', JSON.stringify(myObj))

// const newObj = JSON.parse(localStorage.getItem('myObj'))
// console.log(typeof newObj.umur)


// Waktu
// const testTime = document.querySelector('#test-time')

// function getDate(){
//     function addZero(i){
//         if(i < 10){
//             i = "0" + i
//             return i
//         } else {
//             i = i
//             return i
//         }
//     }
//     const waktu = new Date()
//     let jam = addZero(waktu.getHours())
//     let menit = addZero(waktu.getMinutes())
//     let detik = addZero(waktu.getSeconds())
//     testTime.innerHTML = `${jam}:${menit}:${detik}`
// }

// setInterval(getDate, 1000)