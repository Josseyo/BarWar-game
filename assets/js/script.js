const holder = ["rock", "paper", "scissors", "lizard", "spock"];
//Add event listener for button-clicks

const options = document.querySelectorAll(".button");

options.forEach((option) => {

    option.addEventListener("click", function () {

        const playerChoice = option.getAttribute("aria-label");

        playGame(playerChoice);

    });

});

//Function play game
function playGame() {

}

//Function determine the winner
function determinewinner() {

}

//Function display result and update scores
function display() {

}