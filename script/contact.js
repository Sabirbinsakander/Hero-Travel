let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = slides.children.length;

function moveSlide(step) {
    currentIndex = (currentIndex + step + slideCount) % slideCount;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}