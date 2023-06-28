let secretNumberBox = document.querySelector(".secretnumber")
let number = document.querySelector(".number")
body = document.querySelector("body")
const playAgainBtn = document.querySelector(".again")
const checkBtn = document.querySelector(".check")

let message = document.querySelector(".message")
let score = document.querySelector(".score")
let highScore = document.querySelector(".highscore")

let secretNumber = Math.trunc( 1 + Math.random()*20 )

checkBtn.addEventListener("click", ()=>{
    nbValue = parseInt(number.value)
    if (nbValue != secretNumber){
        message.textContent = nbValue < secretNumber ? "too low" :"too high" ;
        score.textContent --
    } else {
        message.textContent = "Correct Number"
        secretNumberBox.textContent = secretNumber
        highScore.textContent = highScore.textContent < score.textContent ? score.textContent : highScore.textContent ;
        body.style.backgroundColor = "green"
    }
    if (score.textContent == 0){
        message.textContent = "Game over !";
        secretNumberBox.textContent = secretNumber
        body.style.backgroundColor = "red";
    }
})

playAgainBtn.addEventListener("click", ()=>{
    body.style.backgroundColor = "black"
    secretNumber = Math.trunc( 1 + Math.random()*20 )
    secretNumberBox.textContent = "?"
    number.value = ""
    score.textContent = 20
})