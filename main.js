const images = document.querySelectorAll(".main"); //store all the images in the  html in a variable
const next = document.getElementById("next");
const back = document.getElementById("back");

//a simple counter for the index of the images
let currentIndex = 0;

//select a given image from the array of image
function displaySlider() {
  images.forEach((img, index) => {
    img.classList.toggle("active", index === currentIndex);
  });
}
//display the result
displaySlider();

//Move to the next slider
next.addEventListener("click", () => {
  currentIndex = currentIndex + 1;
  if (currentIndex >= imgs.length) {
    currentIndex = 0;
  }
  //give back the result
  displaySlider();
});
back.addEventListener("click", () => {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  displaySlider();
});
