document.addEventListener('DOMContentLoaded', () => {
    const logoWrapper = document.querySelector('.logo-scroll-wrapper');
    const logoList = document.querySelector('.logo-list');

    if (logoWrapper && logoList) {
        const originalLogos = Array.from(logoList.children);
        if (originalLogos.length === 0) return; // Exit if no logos

        const singleSetWidth = logoList.scrollWidth;
        const containerWidth = logoWrapper.offsetWidth;

        // Duplicate logos if needed
        if (singleSetWidth > 0 && containerWidth > 0) {
            while (logoList.scrollWidth < containerWidth * 2) {
                originalLogos.forEach(logo => {
                    logoList.appendChild(logo.cloneNode(true));
                });
            }
        }
        // Check again if duplication resulted in enough width
        if (logoList.scrollWidth <= containerWidth) {
            console.warn("Logo list not wide enough for infinite scroll effect.");
            return; // Exit if still not wide enough
        }

        let currentTranslate = 0;
        const scrollSpeed = 0.3;
        let animationFrameId = null;

        const animateScroll = () => {
            currentTranslate -= scrollSpeed;
            if (Math.abs(currentTranslate) >= singleSetWidth) {
                currentTranslate += singleSetWidth;
            }
            logoList.style.transform = `translateX(${currentTranslate}px)`;
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        // Start the animation
        animateScroll();

        // Optional: Pause on hover
        logoWrapper.addEventListener('mouseenter', () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        });
        logoWrapper.addEventListener('mouseleave', () => {
            if (!animationFrameId) {
                animateScroll(); // Resume animation
            }
        });
    }
}); 