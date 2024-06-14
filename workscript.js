//Card Buttons
document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            card.classList.toggle('expanded');
        });
    });
});

// Carousel
document.addEventListener('DOMContentLoaded', () => {
    const showCarouselBtn = document.getElementById('show-btn');
    const carouselContainer = document.getElementById('carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    showCarouselBtn.addEventListener('click', () => {
        carouselContainer.style.display = 'block';
        showCarouselBtn.style.display = 'none';
    });

    const updateCarousel = () => {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
});

//List
document.addEventListener('DOMContentLoaded', () => {
    const listBtn = document.getElementById('list-btn');
  
    listBtn.addEventListener('click', () => {
        const list = document.getElementById('list-info');
        list.classList.toggle('expanded');
    });
});

//Next
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('next-btn');
    const timeInfo = document.getElementById('time-info');

    nextBtn.addEventListener('click', () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        timeInfo.innerHTML = `Stay tuned for upcoming projects!! <br><br> Current Time: ${timeString} <br> Time Zone: ${timeZoneString}`;
    });
});
