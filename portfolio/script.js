// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.custom-cursor');
const links = document.querySelectorAll('a');

window.addEventListener('mousemove', e => {
    gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
    });
});

// Animate cursor on link hover
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            duration: 0.2,
            scale: 2.5,
            backgroundColor: 'var(--secondary-color)',
            borderColor: 'var(--secondary-color)'
        });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            duration: 0.2,
            scale: 1,
            backgroundColor: 'transparent',
            borderColor: 'var(--primary-color)'
        });
    });
});


// --- HERO SECTION ANIMATION ---
const heroTimeline = gsap.timeline();
heroTimeline
    .from('.line-1', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    })
    .from('.line-2', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
    }, "-=0.8") // Start this animation 0.8s before the previous one ends
    .from('.main-header', {
        duration: 0.8,
        y: -50,
        opacity: 0,
        ease: 'power2.out'
    });


// --- SCROLL-TRIGGERED ANIMATIONS ---

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%', // When the top of the card is 85% from the top of the viewport
            end: 'bottom 20%',
            toggleActions: 'play none none reverse', // play on enter, reverse on leave
        }
    });
});

// Animate "About Me" text
gsap.from('.about-text', {
    duration: 1,
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
    }
});