let rock = 0;
let paper = 1;
let scissors = 2;
let bazooka = 10000;
let playerScore = 0;
let compScore = 0;

function play(playerChoice) {
  let result;
  let comp = Math.floor(Math.random() * 3);

  if (playerChoice == rock) {
    if (comp == rock) result = 'tie'
    else if (comp == paper) {
      result = 'lose'
      compScore++;
    } else {
      result = 'win'
      playerScore++;
    }
  } else if (playerChoice == paper) {
    if (comp == rock) {
      result = 'win'
      playerScore++;
    } else if (comp == paper) result = 'tie'
    else {
      result = 'lose'
      compScore++;
    }
  } else if (playerChoice == scissors) {
    if (comp == rock) {
      result = 'lose'
      compScore++;
    } else if (comp == paper) {
      result = 'win'
      playerScore++
    } else result = 'tie'
  } else if (playerChoice == bazooka) {
    result = 'mega-win'
    playerScore++
  }
  drawScore();
  alert("you " + result)
}

function cheatCheck() {
  let code = window.prompt("Enter Cheat Code")
  let secretWeapon = document.getElementById("bazooka")
  if (code == 'uuddlrlrba') {
    secretWeapon.style.visibility = 'visible';
  }
}

function drawScore() {
  let compCountElem = document.getElementById("comp-score");
  let playerCountElem = document.getElementById("player-score");
  compCountElem.innerText = `${compScore}`;
  playerCountElem.innerText = `${playerScore}`;
}