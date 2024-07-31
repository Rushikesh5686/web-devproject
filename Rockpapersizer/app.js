let userscore=0;
let compscore=0;
let drawscore=0;
console.log("hello");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#uscore");
const cscore=document.querySelector("#cscore")
const dscore=document.querySelector("#dscore")
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin==true){
        console.log("You Win");
        userscore++;
        uscore.innerText=userscore;
        msg.innerText=`You win !!!! Your ${userchoice} beats ${compchoice}`
        
    
    }else{
        compscore++;
        cscore.innerText=compscore;

        console.log("You losse");
        msg.innerText=`you lost. ${compchoice} beats you ${userchoice}`
    }
}
const gencompchoice=()=>{
    
    const option=["rock","paper","scissors"];
    const randinx=Math.floor(Math.random()*3);                                              //generate value of 0 to 2 (math.random()*3)
    return option[randinx];

}
const drawgame=()=>{
    drawscore++;
    dscore.innerText=drawscore;
    console.log("Drawgame");
    msg.innerText="Draw game no result";
}
const playgame=(userchoice,)=>{
    console.log(`choice was clicked ${userchoice}`);
    const compchoice=gencompchoice();
    console.log(`comp choice ${compchoice}`);
    if(userchoice===compchoice){
        drawgame();

    }else{
        let userwin=true;
        if (userchoice==="rock"){
            userwin=compchoice=="paper" ? false : true;
        }else if(userchoice=="paper"){
            userwin=compchoice==="scissor" ? false :true;

        }else{
            userwin=compchoice==="rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
        
    })
})
 