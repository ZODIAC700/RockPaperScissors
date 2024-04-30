let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["rock","paper","scissors"]; //we shored string is array coz gen random number is possible  gen random string is difficult
    const randIdx= Math.floor(Math.random() * 3); //use maths class for gen random number 
    return options[randIdx];
}

const draw=()=>{
    console.log("Game Was Draw")
    msg.innerText="Game was draw, play next move";
    msg.style.backgroundColor="orange";
}
const showWinner=(userWin ,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win!");
        msg.innerText=`You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`You lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userchoice) =>{
    console.log("user choice:",userchoice);
    // Generate Computer choices
    const compChoice= gencompChoice();
    console.log("comp choices:",compChoice);

    if(userchoice===compChoice){
        // Draw game 
       draw();
    }else{
        let userWin = true;
        if(userchoice==="rock"){
            // paper,scissors
           userWin= compChoice==="paper"? false: true;
        }else if(userchoice==="paper"){
            //rocks scissors
            userWin=compChoice=== "scissors" ? false : true;

        }else{
            //rock paper
            userWin=compChoice ==="rock"? false : true;
        }
        showWinner(userWin ,userchoice,compChoice);    
        }
    }


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);
    });
    
});