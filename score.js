// Sélection des éléments HTML
let player1ScoreElement = document.getElementById("player1Score");
let player2ScoreElement = document.getElementById("player2Score");
let maxScoreElement = document.getElementById("maxScore");
let player1Button = document.getElementById("player1Button");
let player2Button = document.getElementById("player2Button");
let resetButton = document.getElementById("resetButton");
let increaseButton = document.getElementById("increaseButton");
let decreaseButton = document.getElementById("decreaseButton");
let congratulationsText = document.getElementById("congratulationsText");

let player1Score = 0;
let player2Score = 0;
let maxScore = parseInt(maxScoreElement.textContent);

// Mise à jour du score du joueur 1
function updatePlayer1Score() {
  player1ScoreElement.textContent = player1Score;
}

// Mise à jour du score du joueur 2
function updatePlayer2Score() {
  player2ScoreElement.textContent = player2Score;
}

// Vérifie si le score maximal a été atteint par l'un des joueurs
function checkMaxScore() {
  if (player1Score >= maxScore) {
    player1Button.disabled = true;
    player2Button.disabled = true;
    maxScoreElement.style.color = "red";
    congratulationsText.textContent = "Bravo!";
  } else if (player2Score >= maxScore) {
    player1Button.disabled = true;
    player2Button.disabled = true;
    maxScoreElement.style.color = "red";
    congratulationsText.textContent = "Bravo!";
  } else {
    player1Button.disabled = false;
    player2Button.disabled = false;
    maxScoreElement.style.color = "black";
    congratulationsText.textContent = "";
  }
}

// Incrémentation du score pour le joueur 1
player1Button.addEventListener("click", function() {
  if (player1Score < maxScore) {
    player1Score += 1;
    updatePlayer1Score();
    checkMaxScore();
  }
});

// Incrémentation du score pour le joueur 2
player2Button.addEventListener("click", function() {
  if (player2Score < maxScore) {
    player2Score += 1;
    updatePlayer2Score();
    checkMaxScore();
  }
});

// Réinitialisation du score
resetButton.addEventListener("click", function() {
  player1Score = 0;
  player2Score = 0;
  updatePlayer1Score();
  updatePlayer2Score();
  checkMaxScore();
});

// Augmentation du score maximum
increaseButton.addEventListener("click", function() {
  maxScore += 1;
  maxScoreElement.textContent = maxScore;
  resetButton.click(); // Réinitialise les scores des joueurs
});

// Diminution du score maximum
decreaseButton.addEventListener("click", function() {
  if (maxScore > 0) {
    maxScore -= 1;
    maxScoreElement.textContent = maxScore;
    resetButton.click(); // Réinitialise les scores des joueurs
  }
});

// Initialisation des scores des joueurs
updatePlayer1Score();
updatePlayer2Score();
checkMaxScore();
