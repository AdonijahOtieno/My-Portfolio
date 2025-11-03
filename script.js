// Professional Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                // Add specific animations for different elements
                if (entry.target.classList.contains('project-card')) {
                    entry.target.style.transitionDelay = '0.2s';
                }
                if (entry.target.classList.contains('timeline-content')) {
                    entry.target.style.transitionDelay = '0.3s';
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = [
        '.about-card',
        '.expertise-item',
        '.timeline-content',
        '.project-card',
        '.education-card',
        '.skill-item',
        '.certification-item',
        '.contact-item',
        '.referee-card'
    ];

    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            observer.observe(element);
        });
    });

    // Hero section typing effect
    function initTypingEffect() {
        const heroTitle = document.querySelector('.hero-content h1');
        const heroSubtitle = document.querySelector('.hero-content h2');
        
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            let i = 0;
            
            function typeWriter() {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Start subtitle animation after title completes
                    if (heroSubtitle) {
                        heroSubtitle.style.animation = 'fadeInUp 1s ease forwards';
                    }
                }
            }
            
            // Start typing after a short delay
            setTimeout(typeWriter, 500);
        }
    }

    // Initialize typing effect
    initTypingEffect();

    // Statistics counter animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 30;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (stat.textContent.includes('%') ? '%' : '');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '');
                }
            }, 60);
        });
    }

    // Initialize stats animation when in view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // Project card hover effects
    function initProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.zIndex = '1';
            });
            
            // Staggered animation delay
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    // Initialize project card effects
    initProjectCardEffects();

    // Skill level animations
    function animateSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            // Add staggered animation
            item.style.transitionDelay = `${index * 0.1}s`;
            
            const level = item.querySelector('.skill-level');
            if (level) {
                const levelText = level.textContent.toLowerCase();
                if (levelText === 'advanced') {
                    item.style.borderLeft = '4px solid #dc2626';
                } else if (levelText === 'proficient') {
                    item.style.borderLeft = '4px solid #0ea5e9';
                } else if (levelText === 'intermediate') {
                    item.style.borderLeft = '4px solid #57534e';
                }
            }
        });
    }

    // Initialize skill animations
    animateSkillBars();

    // Timeline animation
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.2}s`;
        });
    }

    // Initialize timeline animation
    animateTimeline();

    // Active navigation highlighting
    function setActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Initialize active navigation
    setActiveNav();

    // Loading animation
    function initLoadingAnimation() {
        const loader = document.createElement('div');
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #1c1917 0%, #dc2626 50%, #0ea5e9 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        `;
        
        loader.innerHTML = `
            <div style="text-align: center; color: white;">
                <div style="font-size: 2rem; margin-bottom: 1rem; font-weight: bold;">Otieno Adonijah Ogara</div>
                <div style="font-size: 1rem; margin-bottom: 2rem; opacity: 0.8;">Engineering Synergist</div>
                <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; margin: 0 auto; animation: spin 1s linear infinite;"></div>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Remove loader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 1500);
        });
    }

    // Initialize loading animation
    initLoadingAnimation();

    // Back to top button
    function initBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(backToTop);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add hover effect
        backToTop.addEventListener('mouseenter', () => {
            backToTop.style.transform = 'translateY(-3px)';
            backToTop.style.boxShadow = 'var(--shadow-xl)';
        });

        backToTop.addEventListener('mouseleave', () => {
            backToTop.style.transform = 'translateY(0)';
            backToTop.style.boxShadow = 'var(--shadow-lg)';
        });
    }

    // Initialize back to top button
    initBackToTop();

    // Print functionality
    function initPrintButton() {
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print"></i>';
        printButton.title = 'Print Resume';
        printButton.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 2rem;
            width: 50px;
            height: 50px;
            background: var(--bg-white);
            color: var(--text-dark);
            border: 2px solid var(--border-color);
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 1000;
            box-shadow: var(--shadow);
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(printButton);
        
        printButton.addEventListener('click', () => {
            window.print();
        });

        // Add hover effect
        printButton.addEventListener('mouseenter', () => {
            printButton.style.transform = 'translateY(-3px)';
            printButton.style.boxShadow = 'var(--shadow-lg)';
            printButton.style.borderColor = 'var(--primary-color)';
        });

        printButton.addEventListener('mouseleave', () => {
            printButton.style.transform = 'translateY(0)';
            printButton.style.boxShadow = 'var(--shadow)';
            printButton.style.borderColor = 'var(--border-color)';
        });
    }

    // Initialize print button
    initPrintButton();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .nav-menu a.active {
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .nav-menu a.active::after {
            width: 100%;
        }
        
        /* Smooth transitions for all interactive elements */
        .btn, .project-card, .skill-item, .certification-item {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Print styles */
        @media print {
            .nav-menu, .hamburger, .hero-buttons, .scroll-indicator,
            button, .project-badge, .footer-links {
                display: none !important;
            }
            
            .section {
                padding: 1rem 0 !important;
                break-inside: avoid;
            }
            
            .hero {
                background: #1c1917 !important;
                color: #000 !important;
                min-height: auto !important;
            }
            
            .profile-image {
                border: 2px solid #000 !important;
            }
            
            a {
                color: #000 !important;
                text-decoration: none !important;
            }
            
            .project-card, .timeline-content, .education-card {
                box-shadow: none !important;
                border: 1px solid #ccc !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    function initParallax() {
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            });
        }
    }

    // Initialize parallax
    initParallax();

    // Project filter functionality (for future enhancement)
    function initProjectFilter() {
        // This can be enhanced later to filter mechanical vs data projects
        console.log('Project filter ready for enhancement');
    }

    // Initialize project filter
    initProjectFilter();

    // Utility function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initialize all components
    console.log('🎯 Portfolio initialized successfully!');
    console.log('🚀 Features loaded:');
    console.log('   ✅ Smooth scrolling navigation');
    console.log('   ✅ Intersection Observer animations');
    console.log('   ✅ Typing effect for hero section');
    console.log('   ✅ Statistics counter animations');
    console.log('   ✅ Project card hover effects');
    console.log('   ✅ Active navigation highlighting');
    console.log('   ✅ Back to top button');
    console.log('   ✅ Print functionality');
    console.log('   ✅ Loading animation');
    console.log('   ✅ Mobile navigation');
});

// Utility functions
const PortfolioUtils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for performance
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Format large numbers
    formatNumber: function(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioUtils;
}