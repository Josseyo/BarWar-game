const holder = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
let playerScore = 0;
let computerScore = 0;


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
        const computerChoice = holder[Math.floor(Math.random() * 5)];
        let result = determineWinner(playerChoice, computerChoice);
        display(playerChoice, computerChoice, result);
    } catch (err) {
        console.log(err.message)
    }
}

// Function determine the winner
function determineWinner(playerChoice, computerChoice) {

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
        return result;
    } catch (err) {
        console.log(err.message)
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
        console.log(err.message)
    }
}

clickButtons()