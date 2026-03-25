/* =============================================
   ミダクル LP — main.js
   FAQ accordion, sticky CTA, smooth scroll
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq__answer').style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('is-open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- Sticky CTA visibility ---
  const stickyCta = document.querySelector('.sticky-cta');
  const hero = document.querySelector('.hero');

  if (stickyCta && hero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        stickyCta.classList.toggle('is-visible', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(hero);
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Scroll reveal animation (lightweight) ---
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach(el => revealObserver.observe(el));
  }

  // --- GA4 Conversion Events ---
  // All tel: links → phone_click
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'phone_click');
      }
    });
  });

  // Sticky CTA phone button → sticky_cta_click
  const stickyBtn = document.querySelector('.sticky-cta a[href^="tel:"]');
  if (stickyBtn) {
    stickyBtn.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'sticky_cta_click');
      }
    });
  }
});
