let images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Ajoutez ici les noms de vos images
let currentIndex = 0;
let imageElement = document.getElementById("image");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  let currentImage = images[currentIndex];
  imageElement.setAttribute("src", currentImage);
}

 