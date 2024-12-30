// script.js

console.log("script.js is loaded");

document.querySelectorAll('.cta-btn, .visit-btn, .research-btn, .read-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Feature coming soon!');
    });
});


let currentSlide = 0;

function updateCarousel() {
    const carouselContent = document.querySelector('.carousel-content');
    const totalSlides = document.querySelectorAll('.publication-card').length;
    const visibleSlides = 3; // Number of slides visible at a time

    // Ensure slide index stays within bounds
    if (currentSlide < 0) currentSlide = totalSlides - visibleSlides;
    if (currentSlide > totalSlides - visibleSlides) currentSlide = 0;

    // Adjust carousel position
	const offset = -currentSlide * (carouselContent.offsetWidth / visibleSlides);
    carouselContent.style.transition = 'transform 0.5s ease';
    carouselContent.style.transform = `translateX(${offset}px)`;
	
	const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === Math.floor(currentSlide / visibleSlides));
    });
}

function prevSlide() {
    currentSlide--;
    updateCarousel();
}

function nextSlide() {
    currentSlide++;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index * 3;
    updateCarousel();
}




