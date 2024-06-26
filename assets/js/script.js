'use strict';

/*eslint-env es6*/

const holder = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const overallWinnerDisplay = document.getElementById("overallWinnerDisplay");
const playAgainBtn = document.getElementById("playAgain");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

//Function click button 
function clickButtons() {
    try {
        const options = document.querySelectorAll(".button");
        options.forEach((option) => {
            option.addEventListener("click", function () {
                const playerChoice = option.getAttribute("aria-label");
                playGame(playerChoice);
            });
        });
    } catch (err) {
        console.log(err.message);
    }
}

//Function play game
function playGame(playerChoice) {
    try {
        if (roundsPlayed < 5) {
            const computerChoice = holder[Math.floor(Math.random() * 5)];
            let result = determineWinner(playerChoice, computerChoice);
            display(playerChoice, computerChoice, result);
        } else {
            overallWinner();
        }
    } catch (err) {
        console.log(err.message);
    }
}

// Function determine the winner
function determineWinner(playerChoice, computerChoice) {
    let result;
    try {
        if (playerChoice === computerChoice) {
            return "It's a tie";
        } else {
            switch (playerChoice) {
                case "rock":
                    result = (computerChoice === "scissors" || computerChoice === "lizard") ? "You win!" : "You lose...";
                    break;
                case "paper":
                    result = (computerChoice === "rock" || computerChoice === "spock") ? "You win!" : "You lose...";
                    break;
                case "scissors":
                    result = (computerChoice === "paper" || computerChoice === "lizard") ? "You win!" : "You lose...";
                    break;
                case "lizard":
                    result = (computerChoice === "spock" || computerChoice === "paper") ? "You win!" : "You lose...";
                    break;
                case "spock":
                    result = (computerChoice === "rock" || computerChoice === "scissors") ? "You win!" : "You lose...";
                    break;
                default:
                    result = "Invalid choice!";
            }
        }
        roundsPlayed++;

        return result;
    } catch (err) {
        console.log(err.message);
    }
}

//Function display result and update scores
function display(player, computer, decision) {
    try {
        playerDisplay.textContent = player;
        computerDisplay.textContent = computer;
        resultDisplay.textContent = decision;
        resultDisplay.classList.remove("magentaText", "aquaText", "magentawinText", "aqualoseText");

        switch (decision) {
            case "You win!":
                resultDisplay.classList.add("magentawinText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                playerScoreDisplay.classList.add("magentaText");
                break;
            case "You lose...":
                resultDisplay.classList.add("aqualoseText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                computerScoreDisplay.classList.add("aquaText");
                break;
        }
    } catch (err) {
        console.log(err.message);
    }
}

//Function to display overallWinner- Best out of five rounds
function updateOverallWinnerDisplay() {
    try {
        if (playerScore > computerScore) {
            overallWinnerDisplay.textContent = "You win the game!";
            overallWinnerDisplay.classList.add("magentaText");
        } else if (playerScore < computerScore) {
            overallWinnerDisplay.textContent = "House wins the game!";
            overallWinnerDisplay.classList.add("aquaText");
        }
    } catch (err) {
        console.log(err.message);
    }
}

function overallWinner() {
    try {
        if (roundsPlayed >= 5) {
            updateOverallWinnerDisplay();
        }
    } catch (err) {
        console.log(err.message);
    }
}

//Function playagain to reload and start new game
playAgainBtn.addEventListener('click', function () {
    location.reload();

});

clickButtons();