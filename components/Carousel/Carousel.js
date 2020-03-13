/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// setup images to pull them all into carousel //
// setup images to pull them all into carousel //
// setup images to pull them all into carousel //
const allImages = [
  "/../assets/carousel/computer.jpeg",
  "/../assets/carousel/mountains.jpeg",
  "/../assets/carousel/trees.jpeg",
  "/../assets/carousel/turntable.jpeg"
];
// start the index  //

let index = 0;

// add html like previous components

function CarouselComponent() {
  //  create it!

  const theCarousel = document.createElement("div"),
    leftButton = document.createElement("div"),
    rightButton = document.createElement("div"),
    img = document.createElement("img");

  // add class it!

  theCarousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  leftButton.classList.add("button");
  rightButton.classList.add("right-button");
  rightButton.classList.add("button");
  img.classList.add("image");
  //  append it !

  theCarousel.append(leftButton);
  theCarousel.append(rightButton);
  theCarousel.append(img);

  // no text but image needs to be filled in

  img.src = allImages[index];

  // return it all

  return theCarousel;
}

// make the query selector

const addTheCarousel = document.querySelector(".carousel-container");
addTheCarousel.appendChild(CarouselComponent());
