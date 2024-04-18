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

//Function determine the winner
function determineWinner() {

}
//Function display result and update scores
function display() {}