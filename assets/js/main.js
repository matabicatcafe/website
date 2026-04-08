/* ==========================================
   MATABI CAT CAFÉ — main.js
   ========================================== */
(function () {
  'use strict';

  /* ── Nav scroll shadow ── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const siblings = Array.from(entry.target.parentElement.children)
            .filter(c => c.classList.contains('reveal'));
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = (idx * 0.09) + 's';
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(el => io.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('visible'));
    }
  }

  /* ── Active nav highlight ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const match =
      href === path ||
      (href !== '/' && href !== '/index.html' && path.endsWith(href)) ||
      ((path === '/' || path.endsWith('/index.html')) && (href === '/' || href === 'index.html' || href === '/index.html'));
    a.classList.toggle('active', match);
    if (match) a.setAttribute('aria-current', 'page');
  });

  /* ── Smooth anchor scrolling ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── WhatsApp floating button pulse ── */
  const wa = document.getElementById('waFloat');
  if (wa) {
    setTimeout(() => wa.classList.add('pulse'), 3000);
  }

})();
