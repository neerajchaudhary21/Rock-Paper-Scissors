const rockbutton = document.getElementById("rock");
const paperbutton = document.getElementById("paper");
const scissorbutton = document.getElementById("scissors");
const humanpick = document.getElementById("humanchoice");
const comppick = document.getElementById("compchoice");
const submit = document.getElementById("submit");
const humanscore = document.getElementById("humanscore");
const compscore = document.getElementById("compscore");
const roundresult = document.getElementById("roundresult");
const reset = document.getElementById("reset");
const ending = document.getElementById("ending");
let temp;
let totalhumanscore = 0;
let totalcomputerscore = 0;

const getcomputerchoice = function(){
  let value = Math.floor(Math.random()*3);
  if(value==1) return "Rock";
  else if(value==2) return "Paper";
  else return "Scissor";
}

function playRound(hs,cs){
   let hscore = 0;
   let cscore = 0;
   if(hs===cs) {
    roundresult.textContent = "Draw";
    return [0,0];
   }
   if(hs=="Rock" && cs=="Paper"){
      cscore += 1;
      roundresult.textContent = `You lose,${cs} beats ${hs}`;
   }
   else if(hs=="Rock" && cs=="Scissor"){
      hscore += 1;
      roundresult.textContent =`You win,${hs} beats ${cs}`;
   }
   else if(hs=="Paper" && cs=="Rock"){
     hscore += 1;
    roundresult.textContent = `You win,${hs} beats ${cs}`;
   }
   else if(hs=="Paper" && cs=="Scissors"){
     cscore += 1;
      roundresult.textContent = `You lose,${cs} beats ${hs}`;
   }
   else if(hs=="Scissor" && cs=="Rock"){
     cscore += 1;
     roundresult.textContent = `You lose,${cs} beats ${hs}`;
   }
   else if(hs=="Scissors" && cs=="Paper"){
      hscore += 1;
      roundresult.textContent = `You win,${hs} beats ${cs}`;
   } 
   return [hscore,cscore];
}


function playagain(){
    totalhumanscore = 0;
   totalcomputerscore = 0;
   humanscore.textContent = totalhumanscore;
   compscore.textContent = totalcomputerscore;
   roundresult.textContent = "";
}




rockbutton.addEventListener("click",function(){
   humanpick.textContent = "Rock";
   temp = "Rock";
   return temp;
})

paperbutton.addEventListener("click",function(){
   humanpick.textContent = "Paper";
   temp = "Paper";
   return temp;
})

scissorbutton.addEventListener("click",function(){
   humanpick.textContent = "Scissor";
   temp = "Scissor";
   return temp;
})

submit.addEventListener("click",function(){
   const res = getcomputerchoice();
   comppick.textContent = `${res}`;
   const[hs,cs] =  playRound(temp,res);
   totalhumanscore += hs;
   totalcomputerscore += cs;
   humanscore.textContent = totalhumanscore;
   compscore.textContent = totalcomputerscore;
})

reset.addEventListener("click",function(){
   playagain();
});

ending.addEventListener("click",function(){
   if(totalhumanscore>totalcomputerscore){
     roundresult.textContent = "Congratulations,You are the champion";
   }
   else if(totalhumanscore<totalcomputerscore){
    roundresult.textContent = "You lose,Better luck next time";
   }
   else{
    roundresult.textContent = "Tough fight Champ,it's a draw";
   }
   setTimeout(playagain,3000);
})




