// Variables globales
let playerHealth = 100;
let monsterHealth = 100;
let combatStarted = false;

// Fonction pour générer un nombre aléatoire entre min et max inclus
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fonction désactiver les boutons à la fin du combat
let actionsButtons= document.getElementById("action-buttons").getElementsByTagName("button");;

function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

function endCombat(message) {
  let logElement = document.createElement("p");
  logElement.textContent = message;
  log.appendChild(logElement);

  disableButtons();
}



// Fonction pour mettre à jour les barres de vie
function updateHealthBars() {
  document.getElementById("player-health").style.width = playerHealth + "%";
  document.getElementById("monster-health").style.width = monsterHealth + "%";
}

// Fonction pour afficher les logs d'attaque du joueur en bleu
function logPlayerAttack(message) {
  let logElement = document.getElementById("log");
  let attackMessage = document.createElement("p");
  attackMessage.style.color = "blue";
  attackMessage.textContent = message;
  logElement.appendChild(attackMessage);
}

// Fonction pour afficher les logs d'attaque du monstre en rouge
function logMonsterAttack(message) {
  let logElement = document.getElementById("log");
  let attackMessage = document.createElement("p");
  attackMessage.style.color = "red";
  attackMessage.textContent = message;
  logElement.appendChild(attackMessage);
}

// Fonction pour afficher les logs de soin du joueur en vert
function logHeal(message) {
  let logElement = document.getElementById("log");
  let healMessage = document.createElement("p");
  healMessage.style.color = "green";
  healMessage.textContent = message;
  logElement.appendChild(healMessage);
}

// Fonction pour gérer l'attaque du joueur

function attack() {
  if(playerHealth > 0){
  let damage = getRandomNumber(3, 10);
  monsterHealth -= damage;
  monsterHealth = Math.max(0, monsterHealth); // Assure que la vie ne devienne pas négative
  updateHealthBars();
  
  logPlayerAttack("Vous attaquez le monstre et infligez " + damage + " points de dégâts !");
  monsterAttack()
  // Vérifier si le monstre a été vaincu
}else if (monsterHealth === 0) {
    alert("Vous avez vaincu le monstre !");
  } else {
    monsterAttack();
  }
}

// Fonction pour gérer l'attaque spéciale du joueur
function specialAttack() {
  if(playerHealth >0){
  let damage = getRandomNumber(10, 20);
  monsterHealth -= damage;
  monsterHealth = Math.max(0, monsterHealth);
  updateHealthBars();
  
  logPlayerAttack("Vous lancez une attaque spéciale et infligez " + damage + " points de dégâts !");
  monsterAttack();
}else if (monsterHealth === 0) {
    alert("Vous avez vaincu le monstre !");
  } else {
    monsterAttack();
  }
}

// Fonction pour gérer le soin du joueur
function heal() {
  if(playerHealth >0){
  let healPoints = 10;
  playerHealth += healPoints;
  playerHealth = Math.min(100, playerHealth); // Assure que la vie ne dépasse pas 100
  updateHealthBars();
  
  logHeal("Vous vous soignez et récupérez " + healPoints + " points de vie !");
  
  monsterAttack();
}}

// Fonction pour gérer l'attaque du monstre
function monsterAttack() {
  if (monsterHealth>0){
  let damage = getRandomNumber(5, 10);
  playerHealth -= damage;
  playerHealth = Math.max(0, playerHealth);
  updateHealthBars();
  
  logMonsterAttack("Le monstre attaque et vous inflige " + damage + " points de dégâts !");
  
  // Vérifier si le joueur a été vaincu
  if (playerHealth === 0) {alert("Le monstre vous a vaincu !");
  disableButtons();
  }}
}

// Fonction pour gérer l'abandon du joueur
function giveUp() {
  alert("Vous avez abandonné le combat !");
  // Réinitialiser les valeurs
  playerHealth = 100;
  monsterHealth = 100;
  combatStarted = false;
  updateHealthBars();
  
  // Réinitialiser les logs
  let logElement = document.getElementById("log");
  logElement.innerHTML = "";
}

// Fonction pour réinitialiser le combat
function resetCombat() {
    playerHealth = 100;
    monsterHealth = 100;
    combatStarted = false;
    updateHealthBars();
    
    let startButton = document.getElementById("start-button");
    startButton.style.display = "block";
    
    let actionButtons = document.getElementById("action-buttons");
    actionButtons.style.display = "none";
    
    let logElement = document.getElementById("log");
    logElement.innerHTML = "";
  }








// Fonction pour démarrer le combat
function startCombat() {
  combatStarted = true;
  let startButton = document.getElementById("start-button");
  startButton.style.display = "none";
  let actionButtons = document.getElementById("action-buttons");
  actionButtons.style.display = "block";
  
  // Afficher le message de début de combat
  let logElement = document.getElementById("log");
  let startMessage = document.createElement("p");
  startMessage.textContent = "Le combat commence !";
  logElement.appendChild(startMessage);
}

// Initialisation des barres de vie
updateHealthBars();
