
// Test to see if js is properly linked to html, comment out when not needed
console.log("Hello world")

// Function that randomly returns rock or paper of scissors
    // Math.random returns a number between 0 and 1
function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1) + 1);
}

const computerChoice = getComputerChoice();

if (computerChoice == 1) {
    console.log("Rock");
}
else if (computerChoice == 2) {
    console.log("Paper");
}
else if (computerChoice == 3) {
    console.log("Scissors");
}

// Takes the users choice and returns it
    // Prompt method gets user input
function getHumanChoice() {
    const humanChoice = prompt("Please enter your weapon: ").toLowerCase();
    return humanChoice;
}

while (true){
    const humanChoice = getHumanChoice();
    if (humanChoice == "rock") {
        console.log("Rock");
        break;
    }
    else if (humanChoice == "paper") {
        console.log("Paper");
        break;
    }
    else if (humanChoice == "scissors") {
        console.log("Paper");
        break;
    }
    else {
        alert("Please enter a vaid weapon")
        }
}
// Create variables to keep track of human score and computer score
    // Intialize to zero
//let humanScore
//let computerScore

// Create function that takes human and computer choices as arguments
    // Plays one round, increments the winners score, and logs winner annoucement

//Two parameters: humanChoice and computerChoice use as arguments
    // Make case insensitive
    //write code to console.log() a string value representing round winner
    // Increment humanScore or computerScore
//function playRound(humanChoice, computerChoice){

//}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

// Function that calls playRound 5 times
    // Move playRound function inside of playGame
//function playGame