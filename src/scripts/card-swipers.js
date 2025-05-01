import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    const swiperContainers = document.querySelectorAll('.swiper[class*="project-swiper-"]'); 
    
    if (swiperContainers.length > 0) {
        swiperContainers.forEach(container => {
            const swiper = new Swiper(container, { 
                modules: [Navigation, Pagination, Keyboard], 
                loop: true, // Consider if loop is needed if only 2 images
                slidesPerView: 1,
                spaceBetween: 0, 
                pagination: {
                    el: container.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: container.querySelector('.swiper-button-next'),
                    prevEl: container.querySelector('.swiper-button-prev'),
                },
                keyboard: { enabled: true },
            });
        });
    }
}); 