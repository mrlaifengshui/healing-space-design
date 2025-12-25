// ===================================
// Navigation Menu Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ===================================
// Navbar Background on Scroll
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===================================
// Contact Form Submission
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.phone || !data.email || !data.location || !data.service || !data.message) {
            alert('請填寫所有必填欄位');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('請輸入有效的電子郵件地址');
            return;
        }
        
        // Privacy policy check
        if (!data.privacy) {
            alert('請同意隱私權政策');
            return;
        }
        
        // Show success message
        alert('感謝您的諮詢！我們將在 24 小時內與您聯繫。');
        
        // Log form data (in production, send to server)
        console.log('Form submitted:', data);
        
        // Reset form
        contactForm.reset();
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
const animatedElements = document.querySelectorAll(`
    .problem-card,
    .pillar-card,
    .service-card,
    .product-feature,
    .advantage-card,
    .scenario-card,
    .case-card,
    .blog-card,
    .testimonial-card
`);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Hero Scroll Indicator
// ===================================
const heroScroll = document.querySelector('.hero-scroll');

if (heroScroll) {
    heroScroll.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ===================================
// Lazy Loading Images
// ===================================
const images = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// Counter Animation for Case Studies
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isPercentage = element.textContent.includes('%');
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = isPercentage ? `提升 ${target}%` : `降低 ${target}%`;
            clearInterval(timer);
        } else {
            element.textContent = isPercentage ? 
                `提升 ${Math.floor(start)}%` : 
                `降低 ${Math.floor(start)}%`;
        }
    }, 16);
}

// Observe result items for counter animation
const resultItems = document.querySelectorAll('.result-item span');
const resultObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const span = entry.target;
            const text = span.textContent;
            const match = text.match(/\d+/);
            
            if (match) {
                const target = parseInt(match[0]);
                animateCounter(span, target);
                resultObserver.unobserve(span);
            }
        }
    });
}, { threshold: 0.5 });

resultItems.forEach(item => resultObserver.observe(item));

// ===================================
// Mobile Menu Responsive Styles
// ===================================
function handleMobileMenu() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 992) {
        navMenu.style.cssText = `
            position: fixed;
            top: 70px;
            right: -100%;
            width: 300px;
            max-width: 80%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
            z-index: 999;
        `;
        
        if (navMenu.classList.contains('active')) {
            navMenu.style.right = '0';
        }
    } else {
        navMenu.style.cssText = '';
    }
}

window.addEventListener('resize', handleMobileMenu);
handleMobileMenu();

// ===================================
// Product CTA Click Tracking
// ===================================
const productCTAButtons = document.querySelectorAll('.product-cta .btn');

productCTAButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Product CTA clicked');
        // In production, send analytics event
    });
});

// ===================================
// Service Card Click Tracking
// ===================================
const serviceButtons = document.querySelectorAll('.service-card .btn');

serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceCard = button.closest('.service-card');
        const serviceName = serviceCard.querySelector('h3').textContent;
        console.log(`Service clicked: ${serviceName}`);
        // In production, send analytics event
    });
});

// ===================================
// Parallax Effect for Hero
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Initialize on DOM Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('療癒空間設計網站已載入');
    
    // Set initial active nav link
    setActiveNav();
    
    // Handle mobile menu
    handleMobileMenu();
});

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedSetActiveNav = debounce(setActiveNav, 100);
window.removeEventListener('scroll', setActiveNav);
window.addEventListener('scroll', debouncedSetActiveNav);