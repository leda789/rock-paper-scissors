function getComputerChoice() {
  let num = (Math.random()*1000);
  if (num <= 333) return "rock"
  else if (num <= 666) return "paper"
  else return "scissors"
}

function getPlayerChoice() {
  let choice = prompt("Rock, paper, or scissors?");
  choice = choice.toLowerCase();

  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    alert("Invalid option, please try again.");
    choice = prompt("Rock, paper, or scissors?");
  }
  return choice;
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
  let wins = 0,
    losses = 0;

  for (let rounds = 0; rounds < 5; rounds++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);

    if (result.includes("win")) wins++
    else if (result.includes("lose")) losses++;
  }

  if (wins>losses) console.log("You won the game!")
  else if (losses>wins) console.log("You lost the game!")
  else console.log("You tied!")
}