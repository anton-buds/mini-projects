// Mouse gradient follower effect
const mouseGradient = document.querySelector('.mouse-gradient');

document.addEventListener('mousemove', (e) => {
    // Update gradient position immediately for smoother effect
    mouseGradient.style.left = e.clientX + 'px';
    mouseGradient.style.top = e.clientY + 'px';
});

// Smooth scroll functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced header interactions
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add more blur and opacity when scrolling
    if (currentScroll > 50) {
        header.style.backdropFilter = 'blur(12px)';
        header.style.background = 'rgba(255, 255, 255, 0.15)';
        header.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.3)';
    } else {
        header.style.backdropFilter = 'blur(8px)';
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.2)';
    }
    
    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translate(-50%, -100%)';
        header.style.opacity = '0';
    } else {
        header.style.transform = 'translate(-50%, 0)';
        header.style.opacity = '1';
    }
    lastScroll = currentScroll;
});

// Parallax effect for hero background
const heroPic = document.querySelector('.hero-pic');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroPic.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card1, .feature-card2, .feature-card3').forEach(card => {
    observer.observe(card);
});

// Add hover effect for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        link.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', (e) => {
        link.style.transform = 'translateY(0)';
    });
});
