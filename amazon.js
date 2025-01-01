let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

showSlides();
