/* ─── BOOT SEQUENCE ──────────────────────────────────────────── */
(function initBoot() {
  const loader = document.getElementById('bootLoader');
  const skipBtn = document.getElementById('bootSkip');
  const lines = document.querySelectorAll('.boot-line');

  let bootDone = false;

  function finishBoot() {
    if (bootDone) return;
    bootDone = true;
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    initAfterBoot();
  }

  // Skip button
  skipBtn.addEventListener('click', finishBoot);

  // Type out lines sequentially
  document.body.style.overflow = 'hidden';

  lines.forEach((line, i) => {
    const delay = parseInt(line.dataset.delay) || 0;
    setTimeout(() => {
      line.classList.add('visible');
    }, delay + 300);
  });

  // Auto-finish after all lines shown + pause
  setTimeout(finishBoot, 2400);
})();

/* ─── AFTER BOOT ─────────────────────────────────────────────── */
function initAfterBoot() {
  initNavbar();
  initScrollAnimations();
  initHeroStatBars();
  initSkillBars();
  initLucideIcons();
  initFooterYear();
}

/* ─── NAVBAR ─────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('navDrawer');

  // Scroll effect
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  // Close drawer on link click
  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      drawer.classList.remove('open');
    });
  });

  // Close drawer on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && drawer.classList.contains('open')) {
      toggle.classList.remove('open');
      drawer.classList.remove('open');
    }
  });
}

/* ─── SCROLL ANIMATIONS ──────────────────────────────────────── */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ─── HERO STAT BARS ─────────────────────────────────────────── */
function initHeroStatBars() {
  const fills = document.querySelectorAll('.hero-stat-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const target = fill.dataset.fill;
        setTimeout(() => {
          fill.style.width = target + '%';
        }, 200);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
}

/* ─── SKILL BARS ─────────────────────────────────────────────── */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const target = fill.dataset.fill;
        setTimeout(() => {
          fill.style.width = target + '%';
        }, 300);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.2 });

  fills.forEach(fill => observer.observe(fill));
}

/* ─── LUCIDE ICONS ───────────────────────────────────────────── */
function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ─── FOOTER YEAR ────────────────────────────────────────────── */
function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
