function getComputerChoice(){
    var word = ['Rock', 'Paper', 'Scissors'];
    return word [Math.floor(Math.random() * word.length)];
}

function playGame(playerSelection, computerSelection){

    computerSelection = getComputerChoice().toLowerCase();

    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection)
    {
        console.log("TIE!");
    }
    else if (
        (computerSelection == "rock" && playerSelection == "paper")||
        (computerSelection == "scissors" && playerSelection == "rock")||
        (computerSelection == "paper" && playerSelection == "scissors")
    ){
        console.log("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (
        (computerSelection == "paper" && playerSelection == "rock")||
        (computerSelection == "rock" && playerSelection == "scissors")||
        (computerSelection == "scissors" && playerSelection == "paper")
    ){
        console.log("You lose... " + computerSelection +  " beats " + playerSelection);
    }
}   