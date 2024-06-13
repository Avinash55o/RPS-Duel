let userscore=0;
let botscore=0;
const choices=document.querySelectorAll(".choice"); //selects all elements in the document that have a class of "choice"
const msg=document.querySelector("#msg")
const playerScore=document.querySelector("#user-score");
const compScore=document.querySelector("#bot-score");


const gencomchoice=()=>{
    const options=["rock","paper","scissor"]; // create array 
    const randomidx=Math.floor(Math.random()*3 );// generates a random integer between 0 and 2
    return options[randomidx]; //returns the choice corresponding to the randomly generated index from the options array.

} //generating a random choice for the computer 

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id");// its give the id of the clicked element 

        playGame(Userchoice) //call a function playgame.

    }); //event in which if we click, then the provided callback function will be execuated.
}) //adding a click event listener to each element with the class "choice" that was selected earlier using document.querySelectorAll(".choice").


const drawgame=()=>{
    console.log("game is draw.");
    msg.innerText="ops! match is draw";
}; //draw game logic

const showWinner=(userWin)=>{
    if(userWin==true){
        userscore++;
        playerScore.innerText = userscore;
        console.log("you win!");
        msg.innerText="you win!";
        
    }else{
        botscore++;
        compScore.innerText=botscore;
        console.log("you lose!");
        msg.innerText="you lose!";
        
    }
}; //logic for showing score and massages.

const playGame=(Userchoise)=>{
    console.log("user choice:",Userchoise)
    //generate comp chice
    const compchoice=gencomchoice(); // generate the computer's choice.
    console.log("bot choice:",compchoice);

    if (Userchoise==compchoice){
        //Draw game
        drawgame();
    }else{
        let userWin=true;
        if(Userchoise=="rock")
        {
            // compchoise= paper/scissor
            userWin = compchoice=="paper" ? false:true;
        }else if(Userchoise=="paper")
        {
            //rock/scissor
            userWin =compchoice=="scissor"? false:true;
        }else(Userchoise=="scissor") 
        {
            //rock/paper
            userWin =compchoice=="rock"? false:true;
        }

        showWinner(userWin)
    }
    
}//is responsible for simulating a game between user and comp

