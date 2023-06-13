// Sélection des éléments HTML
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Ajout d'une tâche à la liste
function addTask() {
  var taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    var li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    
    // Ajout d'un bouton de suppression
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add("delete-button");
    li.appendChild(deleteButton);
    
    // Suppression de la tâche lorsqu'on clique sur le bouton de suppression
    deleteButton.addEventListener("click", function() {
      li.remove();
    });
    
    // Réinitialisation de l'input
    taskInput.value = "";
  } 
}

// Ajout de la tâche lorsqu'on clique sur le bouton "Ajouter"
addButton.addEventListener("click", addTask);

// Ajout de la tâche lorsqu'on appuie sur la touche "Entrée"
taskInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addTask(); 
  }
});

// Affichage de l'élément saisi en temps réel
taskInput.addEventListener("input", function() {
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    var previewElement = document.getElementById("preview");
    if (!previewElement) {
      previewElement = document.createElement("p");
      previewElement.id = "preview";
      taskList.parentNode.insertBefore(previewElement, taskList);
    }
    previewElement.textContent = "En train de saisir : " + taskText;
  } else {
    var previewElement = document.getElementById("preview");
    if (previewElement) {
      previewElement.remove();
    }
  }
});

