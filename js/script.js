/* ============================================================
   BuySell Bangladesh - Main JavaScript
   ============================================================ */

'use strict';

// --- Loading Screen ---
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 2200);
  }
});

// --- Navbar scroll behavior ---
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// --- Mobile menu toggle ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });
}

// --- Back to top ---
const backTop = document.getElementById('back-to-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// --- Scroll reveal ---
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
initReveal();

// --- Animated counters ---
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.floor(eased * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stats-trigger').forEach(el => statsObserver.observe(el));

// --- Wishlist toggle ---
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.product-wishlist');
  if (btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fas');
      icon.classList.toggle('far');
    }
    const msg = btn.classList.contains('active') ? 'Added to wishlist!' : 'Removed from wishlist';
    showToast(msg, btn.classList.contains('active') ? 'success' : 'info');
  }
});

// --- FAQ accordion ---
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// --- Toast notification ---
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = `
      position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);
      z-index:9999;display:flex;flex-direction:column;gap:0.5rem;align-items:center;
    `;
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const colors = { success: '#10B981', info: '#0EA5E9', error: '#EF4444', warning: '#F59E0B' };
  toast.style.cssText = `
    background:${colors[type] || colors.info};color:white;
    padding:0.65rem 1.5rem;border-radius:9999px;
    font-size:0.88rem;font-weight:600;
    box-shadow:0 4px 20px rgba(0,0,0,0.15);
    animation:toastIn 0.3s ease;
    font-family:'Inter',sans-serif;
  `;
  toast.textContent = message;
  if (!document.getElementById('toast-style')) {
    const style = document.createElement('style');
    style.id = 'toast-style';
    style.textContent = `@keyframes toastIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`;
    document.head.appendChild(style);
  }
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// --- Newsletter form ---
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]');
    if (email && email.value) {
      showToast('Subscribed successfully! Welcome to BuySell Bangladesh.', 'success');
      email.value = '';
    }
  });
}

// --- Contact form ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent! We\'ll get back to you within 24 hours.', 'success');
    contactForm.reset();
  });
}

// --- Search suggestions ---
function initSearchSuggestions() {
  const suggestions = [
    'iPhone 15 Pro', 'Samsung Galaxy', 'Laptop Dell', 'Honda Motorcycle',
    'Toyota Car', 'Apartment Dhaka', 'Air Conditioner', 'Refrigerator',
    'Sofa Set', 'Study Table', 'Cricket Bat', 'Job in Chittagong'
  ];
  document.querySelectorAll('.search-with-suggestions').forEach(wrap => {
    const input = wrap.querySelector('input');
    let sugBox = wrap.querySelector('.search-suggestions');
    if (!input) return;
    if (!sugBox) {
      sugBox = document.createElement('div');
      sugBox.className = 'search-suggestions';
      wrap.style.position = 'relative';
      wrap.appendChild(sugBox);
    }
    input.addEventListener('input', () => {
      const val = input.value.toLowerCase().trim();
      if (!val) { sugBox.classList.remove('show'); return; }
      const matches = suggestions.filter(s => s.toLowerCase().includes(val)).slice(0, 5);
      sugBox.innerHTML = matches.map(m =>
        `<div class="suggestion-item"><i class="fas fa-search"></i>${m}</div>`
      ).join('');
      sugBox.classList.toggle('show', matches.length > 0);
    });
    sugBox.addEventListener('click', (e) => {
      const item = e.target.closest('.suggestion-item');
      if (item) {
        input.value = item.textContent.trim();
        sugBox.classList.remove('show');
      }
    });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) sugBox.classList.remove('show');
    });
  });
}
initSearchSuggestions();

// --- Category filter highlight ---
document.querySelectorAll('.cat-card, .category-page-card').forEach(card => {
  card.addEventListener('click', () => {
    const name = card.querySelector('.cat-name, .category-page-name')?.textContent;
    if (name) window.location.href = `products.html?cat=${encodeURIComponent(name)}`;
  });
});

// --- Multi-step sell form ---
function initSellForm() {
  const steps = document.querySelectorAll('.form-step');
  const stepIndicators = document.querySelectorAll('.step');
  if (!steps.length) return;

  let current = 0;

  function goToStep(n) {
    steps[current].classList.remove('active');
    stepIndicators[current]?.classList.remove('active');
    if (n > current) stepIndicators[current]?.classList.add('done');
    current = n;
    steps[current].classList.add('active');
    stepIndicators[current]?.classList.add('active');
    stepIndicators[current]?.classList.remove('done');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (current < steps.length - 1) goToStep(current + 1);
    });
  });
  document.querySelectorAll('[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (current > 0) goToStep(current - 1);
    });
  });

  const sellForm = document.getElementById('sell-form');
  if (sellForm) {
    sellForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sellForm.style.display = 'none';
      document.querySelector('.progress-steps')?.style.setProperty('display', 'none');
      const success = document.getElementById('success-animation');
      if (success) success.classList.add('show');
    });
  }
}
initSellForm();

// --- Product gallery ---
function initGallery() {
  const thumbs = document.querySelectorAll('.gallery-thumb');
  const mainImg = document.querySelector('.gallery-main img');
  if (!thumbs.length || !mainImg) return;
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = thumb.querySelector('img').src;
    });
  });
}
initGallery();

// --- Image upload preview ---
const imageInput = document.getElementById('product-images');
const uploadPreview = document.getElementById('upload-preview');
if (imageInput && uploadPreview) {
  imageInput.addEventListener('change', () => {
    uploadPreview.innerHTML = '';
    [...imageInput.files].slice(0, 6).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.cssText = 'width:80px;height:80px;object-fit:cover;border-radius:8px;border:2px solid #0EA5E9;';
        uploadPreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });
}

// --- Product search & filter (products page) ---
function initProductsFilter() {
  const searchInput = document.getElementById('product-search');
  const cards = document.querySelectorAll('.product-card[data-name]');
  if (!searchInput || !cards.length) return;

  function filterProducts() {
    const query = searchInput.value.toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const cat = (card.dataset.category || '').toLowerCase();
      const loc = (card.dataset.location || '').toLowerCase();
      const matches = name.includes(query) || cat.includes(query) || loc.includes(query);
      card.style.display = matches ? '' : 'none';
      if (matches) shown++;
    });
    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = shown;
  }

  searchInput.addEventListener('input', filterProducts);
}
initProductsFilter();

// --- Price range filter ---
const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');
const applyPrice = document.getElementById('apply-price');
if (applyPrice) {
  applyPrice.addEventListener('click', () => {
    const min = parseInt(priceMin?.value) || 0;
    const max = parseInt(priceMax?.value) || Infinity;
    document.querySelectorAll('.product-card[data-price]').forEach(card => {
      const price = parseInt(card.dataset.price);
      card.style.display = (price >= min && price <= max) ? '' : 'none';
    });
  });
}

// --- Share button ---
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: document.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!', 'success');
      });
    }
  });
});

// --- Recently viewed (localStorage simulation with sessionStorage) ---
function trackRecentlyViewed() {
  const productTitle = document.querySelector('.product-detail-title');
  if (productTitle) {
    const key = 'recentlyViewed';
    const existing = JSON.parse(sessionStorage.getItem(key) || '[]');
    const entry = { title: productTitle.textContent, url: location.href, time: Date.now() };
    const updated = [entry, ...existing.filter(e => e.url !== entry.url)].slice(0, 5);
    sessionStorage.setItem(key, JSON.stringify(updated));
  }
}
trackRecentlyViewed();

// --- Condition badge coloring ---
document.querySelectorAll('.condition-badge').forEach(badge => {
  const text = badge.textContent.toLowerCase();
  if (text.includes('new')) badge.classList.add('chip', 'condition-new');
  else if (text.includes('used')) badge.classList.add('chip', 'condition-used');
});

// --- Smooth anchor navigation ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- View toggle (grid/list) ---
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const grid = document.querySelector('.products-grid');
    if (!grid) return;
    if (btn.dataset.view === 'list') {
      grid.style.gridTemplateColumns = '1fr';
    } else {
      grid.style.gridTemplateColumns = '';
    }
  });
});

// --- Stagger reveal on product cards ---
document.querySelectorAll('.products-grid .product-card, .categories-grid .cat-card').forEach((card, i) => {
  card.style.animationDelay = `${i * 60}ms`;
  card.classList.add('reveal');
});
initReveal();
