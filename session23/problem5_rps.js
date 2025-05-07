// Coding Challenge #5 Rock, Paper, Scissors
// Write a function playGame(player1, player2) that determines the winner of a rock-paper-scissors game.
// "rock" beats "scissors"
// "scissors" beats "paper"
// "paper" beats "rock"
// If both players choose the same, return "It's a tie!".
// If an invalid choice is entered, return "Invalid move".

// examples:

function playGame(player1, player2) {
  const validMoves = ["rock", "paper", "scissors"];
  if (!validMoves.includes(player1) || !validMoves.includes(player2)) {
    return "Invalid move";
  }

  if (player1 === player2) {
    return "It's a tie!";
  }

  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 wins!";
  } else {
    return "Player 2 wins!";
  }
}

// Examples:
console.log("rock vs scissors:", playGame("rock", "scissors")); // Player 1 wins!
console.log("paper vs rock:", playGame("paper", "rock"));     // Player 1 wins!
console.log("scissors vs paper:", playGame("scissors", "paper")); // Player 1 wins!
console.log("rock vs paper:", playGame("rock", "paper"));       // Player 2 wins!
console.log("scissors vs rock:", playGame("scissors", "rock"));   // Player 2 wins!
console.log("paper vs scissors:", playGame("paper", "scissors")); // Player 2 wins!
console.log("rock vs rock:", playGame("rock", "rock"));         // It's a tie!
console.log("lizard vs spock:", playGame("lizard", "spock"));   // Invalid move
console.log("rock vs spock:", playGame("rock", "spock"));     // Invalid move