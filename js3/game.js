let playGame = confirm("Shall we play rock, paper or scissors?");

if (playGame) {
  let playerChoice = prompt("Please enter rock,  paper, or scissors");
  if (playerChoice) {
    let player = playerChoice.trim().toLowerCase();
    if (player === "rock" || player === "paper" || player === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        player === computer
          ? "Tie game!"
          : player === "rock" && computer === "paper"
          ? `player: ${player} \nComputer: ${computer}\n Computer wins!`
          : player === "paper" && computer === "scissors"
          ? `player: ${player} \nComputer: ${computer}\n Computer wins!`
          : player === "scissors" && computer === "rock"
          ? `player: ${player} \nComputer: ${computer}\n Computer wins!`
          : `player: ${player} \nComputer: ${computer}\n Player wins!`;

      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("ok, see you next time");
    } else {
      alert("You didn.t enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
