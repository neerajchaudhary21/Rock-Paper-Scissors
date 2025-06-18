const getcomputerchoice = function(){
  let value = Math.floor(Math.random()*3);
  if(value==1) return "rock";
  else if(value==2) return "paper";
  else return "scissors";
}


const gethumanchoice = function(chosenvalue){
   if(chosenvalue==1) return "rock";
   else if(chosenvalue==2) return "paper";
   else return "scissors";
}

function playRound(hs,cs){
   let hscore = 0;
   let cscore = 0;
   if(hs===cs) {
    console.log("Draw");
    return [0,0];
   }
   if(hs=="rock" && cs=="paper"){
      cscore += 1;
       console.log(`You lose,${cs} beats ${hs}`);
   }
   else if(hs=="rock" && cs=="scissors"){
      hscore += 1;
      console.log(`You win,${hs} beats ${cs}`);
   }
   else if(hs=="paper" && cs=="rock"){
     hscore += 1;
    console.log(`You win,${hs} beats ${cs}`);
   }
   else if(hs=="paper" && cs=="scissors"){
     cscore += 1;
      console.log(`You lose,${cs} beats ${hs}`);
   }
   else if(hs=="scissors" && cs=="rock"){
     cscore += 1;
     console.log(`You lose,${cs} beats ${hs}`);
   }
   else if(hs=="scissors" && cs=="paper"){
      hscore += 1;
      console.log(`You win,${hs} beats ${cs}`);
   } 
   return [hscore,cscore];
}


let humanscore = 0;
let computerscore = 0;
const computerselection = getcomputerchoice();


for(let i = 0;i<5;i++){
  let chosenvalue = parseInt(prompt("Enter the value,1 for rock,2 for paper,3 for scissors"));
  const humanselection = gethumanchoice(chosenvalue);
  const [hscore,cscore] = playRound(humanselection,computerselection);
   humanscore += hscore;
   computerscore += cscore;
   if(humanscore>=3) {
    console.log("You Win!!");
     break;
   }
   if(computerscore>=3) {
    console.log("You Lose!!");
    break;
   }
}

console.log("Match has been drawn");
