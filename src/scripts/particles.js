import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // loads tsparticles-slim

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 2,
            random: true
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true
        }
    },
    detectRetina: true,
    background: { // Ensure background is set if needed, or remove if handled by CSS
        // color: "#1a2a38", // Example background color
    }
};

async function initializeParticles() {
    await loadSlim(tsParticles);
    await tsParticles.load({ id: "particles-js", options: particlesOptions });
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the particles-js div exists
    if (document.getElementById('particles-js')) {
        initializeParticles().catch(error => console.error('Error initializing tsParticles:', error));
    }
}); 