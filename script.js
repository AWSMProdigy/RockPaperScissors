alert("Welcome to Rock Paper Scissors!");
var result;
var options = ["R", "r", "P", "p", "S", "s"]
var isPlaying = true;
outcomes = {
    wins: 0,
    ties: 0,
    losses: 0
}

function keepPlaying(){
    const choice = prompt(result + "\nWins: " + outcomes.wins + "\nTies: " + outcomes.ties
    + "\nLosses: " + outcomes.losses + "\nWould you like to keep playing? y/n");
    console.log(choice);
    if(String(choice).toLowerCase() !== "y" && String(choice).toLowerCase() !== "n"){
        console.log("Please choose valid response");
        keepPlaying();
    }
    else if(String(choice).toLowerCase() == "y"){
        console.log("Keep playing!");
        return;
    }
    else{
        console.log("Stop playing!");
        isPlaying = false;
        return;
    }
}

while(isPlaying == true){
    const input = String(prompt("R, P, or, S?")).toUpperCase();
    console.log(input);
    if(!options.includes(input)){
        console.log("Please select an available option");
        continue;
    }
    compChoice = String(options[Math.floor(Math.random() * options.length)]).toUpperCase();

    if(input === compChoice){
        result = "It's a tie!";
        outcomes.ties++;
    }
    else if(input == "R" && compChoice == "S"){
        result = "Your opponent chose scissors. You win!";
        outcomes.wins++;
    }
    else if(input == "R" && compChoice == "P"){
        result = "Your opponent chose paper. You lose!";
        outcomes.losses++;
    }
    else if(input == "S" && compChoice == "R"){
        result = "Your opponent chose rock. You lose!";
        outcomes.losses++;
    }
    else if(input == "S" && compChoice == "P"){
        result = "Your opponent chose paper. You win!";
        outcomes.wins++;
    }
    else if(input == "P" && compChoice == "S"){
        result = "Your opponent chose scissors. You lose!";
        outcomes.losses++;
    }
    else if(input == "P" && compChoice == "R"){
        result = "Your opponent chose rock. You win!";
        outcomes.wins++;
    }
    keepPlaying();
}
console.log("Thanks for playing!");

