const myButton = document.querySelector('button');
const image = document.querySelector ('img');
const images = [ "img/1.jpeg", "img/2.jpg", "img/3.jpeg", "img/4.jpeg"]


myButton.addEventListener("click",changeImage);
function changeImage(){
let randomIndex = Math.floor(Math.random() * images.length);
console.log(randomIndex);
image.src= images[randomIndex]
}

