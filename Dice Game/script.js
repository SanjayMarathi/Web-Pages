function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function getImagePath(num) {
  return `images/dice${num}.png`;
}

function checkWinner() {
  const num1 = getRandom();
  const num2 = getRandom();

  const img1 = document.getElementById("diceImage1");
  const img2 = document.getElementById("diceImage2");
  const header = document.getElementById("h1");

  if (num1 > num2) {
    header.textContent = "Player 1 Wins!";
  } else if (num1 < num2) {
    header.textContent = "Player 2 Wins!";
  } else {
    header.textContent = "Draw!";
  }

  img1.src = getImagePath(num1);
  img2.src = getImagePath(num2);  
}

window.onload = checkWinner;
