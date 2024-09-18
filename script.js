const track = document.querySelector(".carousel-track");
let currentSlide = 0;
const totalCards = document.querySelectorAll(".carousel-track .card").length;
const cardsToShow = 4; // Number of cards visible at a time

function moveCarousel(direction) {
  const maxSlide = totalCards - cardsToShow;

  // Update the current slide position
  currentSlide += direction;

  // Ensure the current slide doesn't go out of bounds
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  if (currentSlide > maxSlide) {
    currentSlide = maxSlide;
  }

  // Move the carousel
  const cardWidth = document.querySelector(".card").offsetWidth + 20; // Including margin
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}
