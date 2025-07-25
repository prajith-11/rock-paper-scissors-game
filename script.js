let uScore = 0;
let cScore = 0;

const home = document.querySelector("body");

// Adding on-click event to play whenever button is selected
const rock = document.querySelector("#rock");
rock.addEventListener(
    "click",()=>playGame("Rock")
)
const paper = document.querySelector("#paper");
paper.addEventListener(
    "click",()=>playGame("Paper")
)
const scissors = document.querySelector("#scissors");
scissors.addEventListener(
    "click",()=>playGame("Scissors")
)

// generating computer choice
function getComputerChoice(){
    choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

const displayScore = document.createElement("div");
const displayChoice = document.createElement("div");

// Defining game
function playGame(UChoice){
    let CChoice = getComputerChoice();
    displayChoice.innerHTML = `<p>User Choice = ${UChoice}</p><p>Computer Choice = ${CChoice}</p>`;
    home.appendChild(displayChoice);
    
    if(UChoice==CChoice){}
    else if((UChoice=="Rock" && CChoice=="Paper") ||
        (UChoice=="Paper" && CChoice=="Scissors") ||
        (UChoice=="Scissors" && CChoice=="Rock")) cScore++;
    else uScore++;
    displayScore.innerHTML = `<p>User score = ${uScore}</p><p>Computer score = ${cScore}</p>`;
    home.appendChild(displayScore);
    if(uScore+cScore>=5){
        const win = document.createElement("div");
        if(uScore>cScore) {win.textContent = "User Wins!";}
        else if(uScore<cScore) {win.textContent = "Computer Wins!";}
        else win.textContent = "Game Drawn";
        home.appendChild(win);

        // Creating a button to play again
        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again?";
        home.appendChild(playAgain);
        document.querySelectorAll("#rock,#paper,#scissors").forEach(
            btn => btn.disabled = true
        );
        playAgain.addEventListener(
            "click", ()=> {
                home.removeChild(win);
                home.removeChild(displayScore);
                home.removeChild(displayChoice);
                uScore = 0;
                cScore = 0;
                document.querySelectorAll("#rock,#paper,#scissors").forEach(
                    btn => btn.disabled = false
                );
                home.removeChild(playAgain);
            },
        )
    }
}