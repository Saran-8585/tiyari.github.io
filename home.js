const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > carouselItems.length - 1) {
        currentIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = carouselItems[0].clientWidth;
    carouselInner.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}
