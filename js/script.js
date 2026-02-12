// Main Script
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Experience Tabs Logic ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const jobPanels = document.querySelectorAll('.job-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            jobPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding panel
            const jobId = button.getAttribute('data-id');
            const jobPanel = document.getElementById(jobId);
            if (jobPanel) {
                jobPanel.classList.add('active');
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in-up, .section-heading, .project-card, .about-content');
    fadeElements.forEach(el => {
        el.classList.add('hidden'); // Initially hide
        observer.observe(el);
    });

    // --- Navbar Scroll Hide/Show (Optional Polish) ---
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            if (scrollTop > 0) {
                 navbar.style.boxShadow = '0 10px 30px -10px var(--navy-shadow)';
            } else {
                 navbar.style.boxShadow = 'none';
            }
        }
        lastScrollTop = scrollTop;
    });

    // --- Mobile Menu Toggle (Basic) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Simple toggle for now, would ideally animate a slide-out drawer
            const isVisible = navLinks.style.display === 'flex';
            
            if (isVisible) {
                navLinks.style.display = ''; // Reset to css default
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'fixed';
                navLinks.style.top = '0';
                navLinks.style.right = '0';
                navLinks.style.height = '100vh';
                navLinks.style.width = '75%';
                navLinks.style.backgroundColor = 'var(--light-navy)';
                navLinks.style.justifyContent = 'center';
                navLinks.style.zIndex = '20';
                navLinks.style.boxShadow = '-10px 0px 30px -15px var(--navy-shadow)';
                menuToggle.style.zIndex = '21';
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
    }

});
