document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".scroll-container");
    let isHovered = false;
    let animationFrame;

    const startScrolling = () =>{
        if(isHovered) return;
        scrollContainer.style.transform = `translateX(-${scrollContainer.scrollLeft + 1}px)`;

        if(scrollContainer.scrollWidth - scrollContainer.clientWidth <= scrollContainer.scrollLeft){
            scrollContainer.scrollLeft = 0;
        }else{
            scrollContainer.scrollLeft += 1;
        }
        animationFrame = requestAnimationFrame(startScrolling);
    };
    scrollContainer.addEventListener("mouseover", () => {
        isHovered = true;
        cancelAnimationFrame(animationFrame);
    });
    scrollContainer.addEventListener("mouseout", () => {
        isHovered = false;
        startScrolling();
    });
    startScrolling();
});

