const choiceArr = ["rock", "paper", "scis"];
window.playerWin = 0; window.computerWin = 0;
function getComputerChoice() {
    return choiceArr[Math.floor(Math.random() * (3))]
}

function isGameOver() {
  return playerWin === 5 || computerWin === 5
}


function playRound(playerSelection, computerSelection) {
    let cho = ["rock", "paper"];
    let cho2 = ["scis","rock"];
    let cho3 = ["paper", "scis"]
    let roundWinner;
    if (playerSelection === computerSelection) {
        roundWinner = "Tie"
        return updateResultBoard(roundWinner)
    }
    if (cho.includes(playerSelection) && cho.includes(computerSelection)) {
        if(playerSelection === "paper") {
            playerWin++
            roundWinner = "Player"
        }
        else {
            computerWin++
            roundWinner = "Computer"
        }
    }
    if (cho2.includes(playerSelection) && cho2.includes(computerSelection)) {
        if(playerSelection === "rock") {
            playerWin++
            roundWinner = "Player"
        }
        else {
            computerWin++
            roundWinner = "Computer"
        }
    }
    if (cho3.includes(playerSelection) && cho3.includes(computerSelection)) {
        if(playerSelection === "scis") {
            playerWin++
            roundWinner = "Player"
        }
        else {
            computerWin++
            roundWinner = "Computer"
        }
    }
    return updateResultBoard(roundWinner)
}

const playWin = document.getElementById("playWin")
const compWin = document.getElementById("compWin")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scis = document.getElementById("scis")
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')
const scoreMessage = document.getElementById("scoreMessage")
const winMessage = document.getElementById("winMessage")

rock.addEventListener('click',() => handleClick("rock"))
paper.addEventListener('click',() => handleClick("paper"))
scis.addEventListener('click', () => handleClick("scis"))
restartBtn.addEventListener('click', () => restartGame())
overlay.addEventListener('click',() => closeEndgameModal())

function handleClick(playerSelection) {
    if(isGameOver()) {
        openEndgameModal()
        return
    }

    playRound(playerSelection,getComputerChoice())
    updateScore()
    winMessage.classList.remove('hide')

    if (isGameOver()) {
        winMessage.classList.add('hide')
        openEndgameModal()
        setFinalMessage()
  }
}

function updateResultBoard(result) {
    if (result === "Player") {
        winMessage.textContent = "You Won the Round"
    } else  if (result === "Computer") {
        winMessage.textContent = "You Lost the Round"
    }  else {
        winMessage.textContent = "Tie"
    }
}
function updateScore() {
    playWin.textContent = `Player Win : ${playerWin}`
    // playWin.textContent = `Player Win : ${playerSelection}`
    compWin.textContent = `Computer Win : ${computerWin}`
    // compWin.textContent = `Computer Win : ${compSelection}`
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active');
  overlay.classList.remove('active');
}

function setFinalMessage() {
  return playerWin > computerWin
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
  playerWin = 0
  computerWin = 0
  scoreMessage.textContent = 'Ready Rock Paper Scissors'
  playWin.textContent = 'Player: 0'
  compWin.textContent = 'Computer: 0'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}