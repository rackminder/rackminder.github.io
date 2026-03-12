// ============================================
// RackMinder Main JavaScript
// Navigation, scroll effects, and animations
// ============================================

(function() {
  'use strict';

  // --------------------------------------------
  // Sticky Header on Scroll
  // --------------------------------------------
  const header = document.getElementById('header');
  let lastScrollTop = 0;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // --------------------------------------------
  // Mobile Menu Toggle
  // --------------------------------------------
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);

      // Prevent body scroll when menu is open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close mobile menu when clicking a link
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // --------------------------------------------
  // Smooth Scroll for Anchor Links
  // --------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default for href="#" or form actions
      if (href === '#' || href === '#android-waitlist') {
        return;
      }

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --------------------------------------------
  // Scroll Reveal Animations
  // --------------------------------------------
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: Stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in, .stagger-children').forEach(el => {
    observer.observe(el);
  });

  // --------------------------------------------
  // Active Navigation Link (Scroll Spy)
  // --------------------------------------------
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    const scrollPosition = window.pageYOffset + 200; // Offset for header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --------------------------------------------
  // Form Handling (Android Waitlist)
  // --------------------------------------------
  const androidForm = document.querySelector('#android-waitlist form');
  if (androidForm) {
    androidForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;
      const button = this.querySelector('button[type="submit"]');
      button.disabled = true;
      button.textContent = 'Submitting...';

      try {
        const response = await fetch(this.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(this)
        });

        if (response.ok) {
          alert(`Thanks! We'll notify ${email} when RackMinder launches on Android.`);
          this.reset();
        } else {
          alert('Something went wrong. Please try again or email support@rackminder.com.');
        }
      } catch {
        alert('Something went wrong. Please try again or email support@rackminder.com.');
      } finally {
        button.disabled = false;
        button.textContent = 'Join Android Waitlist';
      }
    });
  }

  // --------------------------------------------
  // Parallax Effect for Hero Background (Optional)
  // --------------------------------------------
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    function handleParallax() {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }

    // Only enable parallax on devices that can handle it smoothly
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      window.addEventListener('scroll', handleParallax, { passive: true });
    }
  }

  // --------------------------------------------
  // Hero Image Carousel
  // --------------------------------------------
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function nextSlide() {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }

    // Start the carousel
    setInterval(nextSlide, slideInterval);
  }

  // --------------------------------------------
  // Initialize on DOM Ready
  // --------------------------------------------
  console.log('🚴 RackMinder website initialized');
})();
