/**
 * Biomo Landing Page - Scroll Animations
 * Using Intersection Observer for performance
 */

(function() {
    'use strict';

    // Intersection Observer configuration
    const observerOptions = {
        root: null,
        rootMargin: '-50px 0px',
        threshold: 0.1
    };

    // Create observer for scroll animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animation (one-time animation)
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize animations when DOM is ready
    function initAnimations() {
        // Get all elements with data-animate attribute
        const animatedElements = document.querySelectorAll('[data-animate]');

        animatedElements.forEach(el => {
            animationObserver.observe(el);
        });

        // Also handle legacy .animate-on-scroll class
        const legacyElements = document.querySelectorAll('.animate-on-scroll');
        legacyElements.forEach(el => {
            animationObserver.observe(el);
        });
    }

    // Add animation attributes to elements dynamically
    function autoAddAnimations() {
        // Section headers
        document.querySelectorAll('.section-header').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
        });

        // Service cards
        document.querySelectorAll('.service-card').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-animate-delay', (i % 3) * 100 + 100);
        });

        // Result cards
        document.querySelectorAll('.result-card').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-animate-delay', (i % 3) * 100 + 100);
        });

        // Testimonial cards
        document.querySelectorAll('.testimonial-card').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-animate-delay', (i % 3) * 100 + 100);
        });

        // Differential items
        document.querySelectorAll('.differential-item').forEach((el, i) => {
            el.setAttribute('data-animate', 'scale');
            el.setAttribute('data-animate-delay', (i % 4) * 100 + 100);
        });

        // FAQ items
        document.querySelectorAll('.faq-item').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-animate-delay', i * 50 + 100);
        });

        // Contact grid columns
        document.querySelectorAll('.contact-grid > div').forEach((el, i) => {
            el.setAttribute('data-animate', i === 0 ? 'fade-right' : 'fade-left');
        });

        // Stats / Social proof
        document.querySelectorAll('.stat').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-animate-delay', i * 100 + 100);
        });

        // KPI cards (inline styled)
        document.querySelectorAll('[style*="text-align: center"][style*="padding: 32px"]').forEach((el, i) => {
            el.setAttribute('data-animate', 'scale');
            el.setAttribute('data-animate-delay', i * 100 + 100);
        });

        // Tables rows
        document.querySelectorAll('tbody tr').forEach((el, i) => {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-animate-delay', i * 100 + 100);
        });
    }

    // Counter animation for numbers
    function animateCounters() {
        const counterElements = document.querySelectorAll('.stat-number, .metric-value');

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const text = el.textContent;
                    const hasPlus = text.includes('+');
                    const hasPercent = text.includes('%');
                    const hasK = text.includes('K');
                    const hasM = text.includes('M');
                    const hasCurrency = text.includes('R$');

                    // Extract numeric value
                    let numMatch = text.match(/[\d.]+/);
                    if (numMatch) {
                        const targetNum = parseFloat(numMatch[0]);
                        let currentNum = 0;
                        const duration = 1500;
                        const startTime = performance.now();

                        function updateCounter(timestamp) {
                            const elapsed = timestamp - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Ease out cubic
                            const easeProgress = 1 - Math.pow(1 - progress, 3);
                            currentNum = targetNum * easeProgress;

                            // Format the number
                            let displayNum = currentNum;
                            if (targetNum >= 100) {
                                displayNum = Math.round(currentNum);
                            } else {
                                displayNum = currentNum.toFixed(1);
                            }

                            // Rebuild the string
                            let result = '';
                            if (hasCurrency) result += 'R$';
                            if (hasPlus) result += '+';
                            result += displayNum;
                            if (hasK) result += 'K';
                            if (hasM) result += 'M';
                            if (hasPercent) result += '%';

                            el.textContent = result;

                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            } else {
                                el.textContent = text; // Reset to original
                            }
                        }

                        requestAnimationFrame(updateCounter);
                    }

                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(el => counterObserver.observe(el));
    }

    // Parallax effect for background elements
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.bg-blur-circle');

        if (parallaxElements.length === 0) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            parallaxElements.forEach((el, i) => {
                const speed = 0.1 + (i * 0.05);
                const yPos = scrollY * speed;
                el.style.transform = `translateY(${yPos}px)`;
            });
        }, { passive: true });
    }

    // Smooth reveal for sections
    function initSectionReveal() {
        const sections = document.querySelectorAll('section:not(.hero)');

        sections.forEach(section => {
            if (!section.hasAttribute('data-animate')) {
                // Add subtle fade effect to entire sections
                section.style.opacity = '0';
                section.style.transition = 'opacity 0.8s ease-out';

                const sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            sectionObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.05 });

                sectionObserver.observe(section);
            }
        });
    }

    // Initialize everything
    function init() {
        autoAddAnimations();
        initAnimations();
        animateCounters();
        initSectionReveal();
        initParallax();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
