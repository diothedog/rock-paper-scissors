console.log("Hello World");

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
// Test that getComputerChoice is working
let computerChoice = getComputerChoice();
console.log(computerChoice);

// Create a function named getHumanChoice that prompts user for input and returns one of the valid choices, depending on user input
function getHumanChoice() {
    // Prompt user for choice and store in humanChoice variable
    let humanChoice = prompt("Rock, paper, or scissors?");
    // Convert humanChoice to lowercase
    humanChoice = humanChoice.toLowerCase()
    // Test to see if humanChoice matches one of the three valid options
    if (humanChoice === "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    }   else {
        return "That is not a valid option.";
    }
}

console.log(getHumanChoice());