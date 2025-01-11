document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideCount = document.querySelectorAll(".slide").length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slideCount - 1;
    }

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();
});
let autoplay = setInterval(() => {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}, 3000);

const slider = document.querySelector(".custom-slider");
slider.addEventListener("mouseover", () => clearInterval(autoplay));
slider.addEventListener("mouseout", () => {
    autoplay = setInterval(() => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 3000);
});