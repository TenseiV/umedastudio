import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    // console.log('External DOMContentLoaded - Start (Simplified)'); // Remove log
    const mainElement = document.querySelector('main[data-projects]');
    if (!mainElement) {
        console.error('Main element with project data not found!');
        return;
    }

    let projectsData = [];
    try {
        projectsData = JSON.parse(mainElement.dataset.projects || '[]');
    } catch (e) {
        console.error('Failed to parse project data:', e);
        return;
    }
    // console.log('Projects Data Parsed:', projectsData); // Optional log

    let modalSwiperInstance = null; 

    // --- Function to open the project modal ---
    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        const modal = document.getElementById('project-modal');
        const titleEl = document.getElementById('modal-project-title');
        const descriptionEl = document.getElementById('modal-project-description');
        const swiperWrapper = document.getElementById('modal-swiper-wrapper');

        if (!project || !modal || !titleEl || !descriptionEl || !swiperWrapper) {
            console.error("Modal elements or project data not found for:", projectId);
            return;
        }

        titleEl.textContent = project.title;
        descriptionEl.textContent = project.detailedDescription;

        swiperWrapper.innerHTML = '';
        project.images.forEach(imgData => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            const imgSrc = imgData?.src;
            if (imgSrc) {
                slide.innerHTML = `<img src="${imgSrc}" alt="${project.title}" class="project-image">`;
            } else {
                slide.innerHTML = `<span>Image not available</span>`;
                console.warn("Image source not found for modal:", imgData);
            }
            swiperWrapper.appendChild(slide);
        });

        modal.classList.add('is-visible');

        if (modalSwiperInstance) {
            modalSwiperInstance.destroy(true, true);
            modalSwiperInstance = null;
        }

        const modalSwiperContainer = document.getElementById('modal-swiper-container');
        if (modalSwiperContainer) {
            modalSwiperInstance = new Swiper(modalSwiperContainer, {
                modules: [Navigation, Pagination, Keyboard],
                loop: project.images.length > 1,
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: modal.querySelector('.modal-swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: modal.querySelector('.modal-swiper-button-next'),
                    prevEl: modal.querySelector('.modal-swiper-button-prev'),
                },
                keyboard: {
                    enabled: true,
                },
            });
        }
    }

    // --- Function to close the project modal ---
    function closeProjectModal(event) {
        const modal = document.getElementById('project-modal');
        if (event && event.target !== modal) {
            return;
        }
        if (modal) {
            modal.classList.remove('is-visible');
            if (modalSwiperInstance) {
                modalSwiperInstance.destroy(true, true);
                modalSwiperInstance = null;
            }
        }
    }

    // Expose functions to global scope for onclick attributes
    window.openProjectModal = openProjectModal;
    window.closeProjectModal = closeProjectModal;

     // Add event listener for modal close button
    const closeButton = document.querySelector('.modal-close-button');
    if (closeButton) {
        closeButton.addEventListener('click', () => closeProjectModal());
    }

     // Add event listener for modal overlay click
     const overlay = document.getElementById('project-modal');
     if (overlay) {
         overlay.addEventListener('click', (e) => closeProjectModal(e));
     }
    // Remove comment markers /* ... */
   // console.log('External DOMContentLoaded - End (Simplified)'); // Remove log
}); 