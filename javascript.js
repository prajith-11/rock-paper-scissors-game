function getComputerChoice(){
    let choice = Math.random();
    if(choice<1/3) return "Rock";
    else if(choice<2/3) return "Paper";
    return "Scissors"
}
function getUserChoice(){
    let choice = prompt("Enter your choice (Rock, Paper or Scissors)");
    choice = choice.toUpperCase();
    if(choice == "ROCK") return "Rock";
    else if(choice == "PAPER") return "Paper"
    else if(choice == "SCISSORS") return "Scissors";
    return "Enter Valid Choice (Rock / Paper / Scissors)"
}
function checkWinner(user,computer){
    if(user=="Enter Valid Choice (Rock / Paper / Scissors)") return "NULL";
    if(user=="Rock"){
        if(computer=="Rock") return "Draw";
        if(computer=="Paper") return "Computer"
        if(computer=="Scissors") return "User";
    }
    if(user=="Paper"){
        if(computer=="Rock") return "User";
        if(computer=="Paper") return "Draw"
        if(computer=="Scissors") return "Computer";
    }
    if(user=="Scissors"){
        if(computer=="Rock") return "Computer";
        if(computer=="Paper") return "User"
        if(computer=="Scissors") return "Draw";
    }
}
let count = parseInt(prompt("Enter number of rounds you want to play"));
let userScore = 0;
let computerScore = 0;
for(let i=0;i<count;i++){
    let cChoice = getComputerChoice();
    let uChoice = getUserChoice();
    let win = checkWinner(uChoice,cChoice);
    if(win == "User") userScore += 1;
    else if(win == "Computer") computerScore += 1;
    console.log("Computer choice is: "+cChoice)
    console.log("User choice is: "+uChoice)
    console.log("Score after end of round "+(i+1))
    console.log("Score of user = "+userScore)
    console.log("Score of computer = "+computerScore)
}
if(computerScore>userScore) console.log("Computer Wins");
else if(userScore>computerScore) console.log("User Wins")
else console.log("Scores tie. Game drawn")