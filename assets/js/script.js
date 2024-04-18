const holder = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");


//Add event listener for button-clicks
const options = document.querySelectorAll(".button");

options.forEach((option) => {

    option.addEventListener("click", function () {

        const playerChoice = option.getAttribute("aria-label");

        playGame(playerChoice);

    });

});

//Function play game
function playGame(playerChoice) {
    const computerChoice = holder[Math.floor(Math.random() * 5)];
    let result = determineWinner(playerChoice, computerChoice);
    display(playerChoice, computerChoice, result);
}

// Function determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie...";
    } else {
        switch (playerChoice) {

            case "rock":

                result = (computerChoice === "scissors" || computerChoice === "lizard") ? "You win!" : "You lose:(";

                break;

            case "paper":

                result = (computerChoice === "rock" || computerChoice === "spock") ? "You win!" : "You lose:(";

                break;

            case "scissors":

                result = (computerChoice === "paper" || computerChoice === "lizard") ? "You win!" : "You lose:(";

                break;

            case "lizard":

                result = (computerChoice === "spock" || computerChoice === "paper") ? "You win!" : "You lose:(";

                break;

            case "spock":

                result = (computerChoice === "rock" || computerChoice === "scissors") ? "You win!" : "You lose:(";

                break;

            default:

                result = "Invalid choice!";

        }
    }

    //Function display result and update scores
    function display() {}
}