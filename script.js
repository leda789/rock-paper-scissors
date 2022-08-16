function getComputerChoice() {
  let num = (Math.random()*1000);
  if (num <= 333) return "rock"
  else if (num <= 666) return "paper"
  else return "scissors"
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "paper") return "Paper beats rock, you win!"
    else if (playerSelection === "scissors") return "Rock beats scissors, you lose!"
    else return "Both rock, tie!" }

  else if (computerSelection === "paper") {
    if (playerSelection === "paper") return "Both paper, tie!"
    else if (playerSelection === "scissors") return "Scissors beats paper, you win!"
    else return "Paper beats rock, you lose!" }

  else { //scissors
    if (playerSelection === "paper") return "Scissors beats paper, you lose!"
    else if (playerSelection === "scissors") return "Both scissors, tie!"
    else return "Rock beats scissors, you win!" }
  }

function game() {
  //loops play round 5 times
  //keeps score
  //reports winner or loser
}

