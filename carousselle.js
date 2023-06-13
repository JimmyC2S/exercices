var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Ajoutez ici les noms de vos images
var currentIndex = 0;
var imageElement = document.getElementById("image");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  var currentImage = images[currentIndex];
  imageElement.setAttribute("src", currentImage);
}

 