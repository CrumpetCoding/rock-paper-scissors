function getComputerChoice(){
    var word = ['Rock', 'Paper', 'Scissors'];
    var output = word [Math.floor(Math.random() * word.length)];
    return output;
}

function getPlayerChoice(input){
    let player = input.toLowerCase();
    return player.charAt(0).toUpperCase() + player.slice(1);
}   
