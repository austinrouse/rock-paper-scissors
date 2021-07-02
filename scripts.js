var arr = ["Rock","Paper","Scissors"];

function playRound(playerSelection, computerSelection) {
    let rvalue = document.getElementsByName('choice');

    computerSelection = arr[Math.floor(Math.random() * arr.length)];
    console.log(computerSelection);
    
    for(i = 0; i < rvalue.length; i++) {
        if(rvalue[i].checked)
        playerSelection = rvalue[i].value;
        console.log(playerSelection);
    }

//Outcomes: RP, PR, SP, PS, RS, SR
    if (computerSelection === playerSelection) {
        alert("It's a tie!");
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') { //RP
        alert("Paper covers rock... You win!");
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') { //PR
        alert("Paper covers rock... You lose!");
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') { //SP
        alert("Scissors cuts paper... You lose!");
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') { //PS
        alert("Scissors cuts paper... You win!");
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') { //RS
        alert("Rock beats scissors... You lose!");
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock') { //SR
        alert ("Rock beats scissors... You win!");
    }
}