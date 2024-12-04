document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("scroll-container");
    const items = Array.from(container.children);
    const itemWidth = items[0].offsetWidth + 40;

    let scrollPosition = 0;
    let animationFrame;

    function cloneItems() {
        const clonesNeeded = items.length;
        for (let i = 0; i < clonesNeeded; i++) {
            const clone = items[i % items.length].cloneNode(true);
            container.appendChild(clone);
        }
    }

    function startInfiniteScroll() {
        scrollPosition += 8;

        if (scrollPosition >= container.scrollWidth / 2) {
            const firstItem = container.firstElementChild;
            container.appendChild(firstItem);
            scrollPosition -= itemWidth;
        }

        container.scrollLeft = scrollPosition;
        animationFrame = requestAnimationFrame(startInfiniteScroll);
    }

    function stopInfiniteScroll() {
        cancelAnimationFrame(animationFrame);
    }

    cloneItems();

    container.addEventListener("mouseover", startInfiniteScroll);
    container.addEventListener("mouseout", stopInfiniteScroll);
});