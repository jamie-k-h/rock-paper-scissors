
// Test to see if js is properly linked to html, comment out when not needed
console.log("Hello world")
let humanScore = 0;
let computerScore = 0;

// Function that randomly returns rock or paper of scissors
    // Math.random returns a number between 0 and 1
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    let choice;

    if(computerChoice === 0) {
        choice = "rock";
    }
    else if (computerChoice === 1) {
        choice = "paper";
    }
    else if (computerChoice === 2) {
        choice = "scissors";
    }

    return choice;
    
}
const computerChoice = getComputerChoice();
console.log(computerChoice);

// Takes the users choice and returns it
    // Prompt method gets user input
function getHumanChoice() {
    const humanChoice = prompt("Please enter your weapon: ").toLowerCase();

//function logHumanChoice(humanChoice) {
    //while (true){
        if (humanChoice == "rock") {
            return humanChoice;
        }
        else if (humanChoice == "paper") {
            return humanChoice;
        }
        else if (humanChoice == "scissors") {
            return humanChoice;
        }
        //else {
            //alert("Please enter a vaid weapon")
            //}
    }
const humanChoice = getHumanChoice();
console.log(humanChoice);
//}
// Create variables to keep track of human score and computer score
    // Intialize to zero


// Create function that takes human and computer choices as arguments
    // Plays one round, increments the winners score, and logs winner annoucement

//Two parameters: humanChoice and computerChoice use as arguments
    // Make case insensitive
    //write code to console.log() a string value representing round winner
    // Increment humanScore or computerScore

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    }
    else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win!");
            humanScore++;
        }
    else {
        console.log("You lose");
        computerScore++;
    }
}

playRound(humanChoice, computerChoice);



// Function that calls playRound 5 times
    // Move playRound function inside of playGame
function playGame() {


    for (i=0; i < 4; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice,computerChoice);
    }
    console.log(`Final score: Human: ${humanScore}, Computer: ${computerScore}`)
}
playGame();