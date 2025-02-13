// JavaScript for Particle Effect

particlesJS('particles-js', {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 6,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#AAAAEE',
            opacity: 0.5,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        }
    },
    retina_detect: true
});
