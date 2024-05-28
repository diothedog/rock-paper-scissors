const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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
            // Print winner message to console and increment humanScore
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore ++;
            // Print score
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
            // Check for tie
        }   else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            // Print score
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }   else {
            // Print winner message and increment computerScore
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore ++;
            // Print score
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
    }

    // // Play 5 rounds
    // let roundCounter = 0;
    // while (roundCounter < 5) {
    //     // Get humanSelection and computerSelection
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();

    //     // Play a round
    //     playRound(humanSelection, computerSelection);

    //     // Increment roundCounter
    //     roundCounter ++;
    // }

    // // After 5 rounds, declare a winner
    // if (humanScore > computerScore) {
    //     console.log("Game over. You win!");
    // }   else if (computerScore > humanScore) {
    //     console.log("Game over. You lose.")
    // }   else {
    //     console.log("Game over. It's a tie.")
    // }
}

playGame();