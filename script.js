// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    initAppIcon();
    initProfileBtn();
    initAnimatedLogo();
    initCounterAnimation();
    initCardAnimations();
    initSmoothScroll();
});

// App Icon Hover Effect
function initAppIcon() {
    const appIcon = document.getElementById('appIcon');
    
    appIcon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s';
    });
    
    appIcon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    appIcon.addEventListener('click', function() {
        alert('App menu clicked! Add your dropdown menu logic here.');
    });
}

// Profile Button Click
function initProfileBtn() {
    const profileBtn = document.getElementById('profileBtn');
    
    profileBtn.addEventListener('click', function() {
        alert('Profile menu clicked! Add your user menu logic here.');
    });
    
    // Add hover animation
    profileBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    profileBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Animated Logo on Load
function initAnimatedLogo() {
    const logoSpans = document.querySelectorAll('#animatedLogo span');
    
    logoSpans.forEach((span, index) => {
        span.style.opacity = '0';
        span.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            span.style.transition = 'opacity 0.5s, transform 0.5s';
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Counter Animation for Stats
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    };
    
    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Card Hover Animations
function initCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add ripple effect to buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size/2 + 'px';
        ripple.style.top = e.clientY - rect.top - size/2 + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c Welcome to Google Clone! ', 'background: #4285F4; color: white; font-size: 20px; padding: 10px;');
console.log('%c Created with ❤️ ', 'color: #EA4335; font-size: 14px;');