let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(n) {
  if (n >= totalSlides) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = totalSlides - 1;
  }
  const offset = slideIndex * -100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(--slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}

showSlide(slideIndex);

let slide = document.querySelector()
