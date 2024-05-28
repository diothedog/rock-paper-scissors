const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");
const gameOver = document.querySelector("#gameOver");

const playAgain = document.createElement("button");
playAgain.setAttribute("id", "playAgain");
playAgain.textContent = "Play again";

// Create a function named getComputerChoice that randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {
    // Generate a random number between 0 and 1 and store in randomNumber variable
    let randomNumber = Math.random();
    // If randomNumber is less than 0.33, return "rock"
    if (randomNumber < 0.33) {
        return "rock";
        // If randomNumber is between 0.33 and 0.66, return "paper"
    }   else if (randomNumber < 0.66) {
        return "paper";
        // If randomNumber is greater than 0.66, return "scissors"
    }   else {
        return "scissors";
    }
}

// Write playGame function that calls playRound for 5 rounds, keeps tracks of the scores, and declares winner at the end
function playGame() {
    // Create variables for humanScore and computerScore
    let humanScore = 0;
    let computerScore = 0;

    // Get humanChoice from button click and play a round
    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });

    // Create a function name playRound that takes humanChoice and computerChoice as parameters
    function playRound(humanChoice, computerChoice) {
        // Check if human is winner
        if (
            (humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            // Display results in div and increment humanScore
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore ++;
            // Print score
            score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
            // Check for tie
        }   else if (humanChoice === computerChoice) {
            results.textContent = "It's a tie!";
            // Print score
            score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
        }   else {
            // Print loser message and increment computerScore
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore ++;
            // Print score
            score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
        }
        // Announce a winner once a player reaches 5 points
        if (humanScore === 5) {
            gameOver.textContent = "Game over. You win!";
            gameOver.appendChild(playAgain);
        }   else if (computerScore === 5) {
            gameOver.textContent = "Game over. You lose!";
            gameOver.appendChild(playAgain);
        }
    }   
}

playGame();