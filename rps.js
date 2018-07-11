
const compNum = Math.random()*3
let compChoice;
if (compNum > 0 && compNum < 1) {
    compChoice = "rock" ;
} else if (compNum >= 1 && compNum <= 2){

 compChoice = "scissors";

} else{
  compChoice = "paper";

  }
