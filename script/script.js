const currentScoreP1    = document.getElementById("currentScoreP1");
const currentScoreP2    = document.getElementById("currentScoreP2");
const totalScoreP1      = document.getElementById("totalScoreP1");
const totalScoreP2      = document.getElementById("totalScoreP2");
const winnerSign     = document.getElementById("winnerSign");

let p1TotalScore = 0;
let p2TotalScore = 0;

let roundCounter = 0;

function rollDices(){

  let p1CurrentScore = "";
  let p2CurrentScore = "";

    let rand1 = Math.floor(Math.random()*6)+1;
    let randImage1Path = "css/images/" + rand1 + ".png";
    
    let rand2 = Math.floor(Math.random()*6)+1;
    let randImage2Path = "css/images/" + rand2 + ".png";
    
    let rand3 = Math.floor(Math.random()*6)+1;
    let randImage3Path = "css/images/ai_dice" + rand3 + ".png";
    
    let rand4 = Math.floor(Math.random()*6)+1;
    let randImage4Path = "css/images/ai_dice" + rand4 + ".png";
    
    let dice1 = document.querySelectorAll("img")[0];
    dice1.setAttribute("src", randImage1Path);
    
    let dice2 = document.querySelectorAll("img")[1];
    dice2.setAttribute("src", randImage2Path);
    
    let dice3 = document.querySelectorAll("img")[2];
    dice3.setAttribute("src", randImage3Path);
    
    let dice4 = document.querySelectorAll("img")[3];
    dice4.setAttribute("src", randImage4Path);

    if(rand1 === 1){
        p1CurrentScore = 0;
    }else if(rand2 === 1){
        p1CurrentScore = 0;
    }else{
        p1CurrentScore = rand1 + rand2;
    }
    if(rand1 === rand2){
        p1CurrentScore = (rand1 + rand2) * 2;
    }

    if(rand3 === 1){
        p2CurrentScore = 0;
        
    }else if(rand4 === 1){
        p2CurrentScore = 0;
    }else{
        p2CurrentScore = rand3 + rand4;
    }
    if(rand3 === rand4){
        p2CurrentScore = (rand3 + rand4) * 2;
    }

    p1TotalScore = p1TotalScore + p1CurrentScore;
    p2TotalScore = p2TotalScore + p2CurrentScore;
  
    currentScoreP1.innerHTML = `Current Score: ${p1CurrentScore}`;
    currentScoreP2.innerHTML = `Current Score: ${p2CurrentScore}`;
    totalScoreP1.innerHTML = `Total Score: ${p1TotalScore}`;
    totalScoreP2.innerHTML = `Total Score: ${p2TotalScore}`;
    
    roundCounter++;
    
    if(roundCounter >= 3){
      document.getElementById("btn-roll").disabled = true;
      if(p1TotalScore > p2TotalScore){
        winnerSign.innerHTML = `Game Over!<br>`;
        winnerSign.innerHTML += `Player 1 Won The Game`;
      }else if(p2TotalScore > p1TotalScore){
        winnerSign.innerHTML = `Game Over!<br>`;
        winnerSign.innerHTML += `Player 2 Won The Game`; 
           }else{
            winnerSign.innerHTML = `Game Over!<br>`;
            winnerSign.innerHTML += `The Game Is Draw!`; 
      }
    }
}

document.querySelector("button").addEventListener("click", rollDices);


let acc = document.getElementsByClassName("dropDown");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}