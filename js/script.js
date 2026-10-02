/**
 * Aura Atelier - Main JavaScript Engine
 * Handles State, Cart, Wishlist, Theme, Search, Quick-View, Toasts & Interactions
 */

// ==========================================================================
// STATE MANAGEMENT & LOCAL STORAGE KEYS
// ==========================================================================
const STORAGE_KEYS = {
  CART: "aura_fashion_cart",
  WISHLIST: "aura_fashion_wishlist",
  THEME: "aura_fashion_theme",
  RECENTLY_VIEWED: "aura_recently_viewed",
  APPLIED_COUPON: "aura_applied_coupon"
};

// Coupons configuration
const VALID_COUPONS = {
  "VOGUE20": { discountPercent: 20, description: "20% Exclusive Discount" },
  "FIRST10": { discountPercent: 10, description: "10% First Order Welcome" },
  "AURA50": { discountFlat: 50, minSpend: 200, description: "₹50 OFF over ₹200" }
};

const CartStore = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
    } catch (e) {
      console.error("Failed to parse cart", e);
      return [];
    }
  },
  save: (cart) => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    updateBadges();
  },
  add: (product, size, color, quantity = 1) => {
    const cart = CartStore.get();
    const chosenSize = size || (product.sizes ? product.sizes[0] : "Standard");
    const chosenColor = color || (product.colors ? product.colors[0].name : "Classic");

    const existingIndex = cart.findIndex(
      item => item.id === product.id && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        category: product.category,
        size: chosenSize,
        color: chosenColor,
        quantity: quantity
      });
    }

    CartStore.save(cart);
    showToast("Added to Cart", `"${product.name}" (${chosenSize}, ${chosenColor}) has been added.`, "success");
  },
  remove: (index) => {
    const cart = CartStore.get();
    const removedItem = cart.splice(index, 1)[0];
    CartStore.save(cart);
    if (removedItem) {
      showToast("Removed from Cart", `"${removedItem.name}" was removed.`, "info");
    }
  },
  updateQuantity: (index, newQty) => {
    const cart = CartStore.get();
    if (cart[index]) {
      if (newQty <= 0) {
        CartStore.remove(index);
      } else {
        cart[index].quantity = newQty;
        CartStore.save(cart);
      }
    }
  },
  clear: () => {
    localStorage.removeItem(STORAGE_KEYS.CART);
    localStorage.removeItem(STORAGE_KEYS.APPLIED_COUPON);
    updateBadges();
  },
  getSubtotal: () => {
    const cart = CartStore.get();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },
  getCount: () => {
    const cart = CartStore.get();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }
};

const WishlistStore = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
    } catch (e) {
      return [];
    }
  },
  save: (list) => {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
    updateBadges();
  },
  toggle: (productId) => {
    let list = WishlistStore.get();
    const index = list.indexOf(productId);
    const product = typeof ProductStore !== "undefined" ? ProductStore.getById(productId) : null;
    const name = product ? product.name : "Product";

    if (index > -1) {
      list.splice(index, 1);
      WishlistStore.save(list);
      showToast("Wishlist Updated", `Removed "${name}" from your wishlist.`, "info");
      return false;
    } else {
      list.push(productId);
      WishlistStore.save(list);
      showToast("Added to Wishlist", `"${name}" saved to your wishlist.`, "success");
      return true;
    }
  },
  has: (productId) => {
    const list = WishlistStore.get();
    return list.includes(productId);
  },
  remove: (productId) => {
    let list = WishlistStore.get();
    list = list.filter(id => id !== productId);
    WishlistStore.save(list);
  },
  getCount: () => {
    return WishlistStore.get().length;
  }
};

const RecentlyViewedStore = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED)) || [];
    } catch (e) {
      return [];
    }
  },
  add: (productId) => {
    if (!productId) return;
    let list = RecentlyViewedStore.get();
    list = list.filter(id => id !== productId);
    list.unshift(productId);
    if (list.length > 8) list = list.slice(0, 8);
    localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(list));
  }
};

// ==========================================================================
// TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(title, message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let iconSvg = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>`;
  if (type === "success") {
    iconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>`;
  } else if (type === "error") {
    iconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>`;
  }

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  const removeToast = () => {
    toast.classList.add("is-hiding");
    setTimeout(() => toast.remove(), 350);
  };

  toast.querySelector(".toast-close").addEventListener("click", removeToast);
  setTimeout(removeToast, 3800);
}

// ==========================================================================
// BADGE COUNTER UPDATES
// ==========================================================================
function updateBadges() {
  const cartBadges = document.querySelectorAll(".cart-count-badge");
  const cartCount = CartStore.getCount();
  cartBadges.forEach(el => {
    el.textContent = cartCount;
    el.style.display = cartCount > 0 ? "flex" : "none";
  });

  const wishlistBadges = document.querySelectorAll(".wishlist-count-badge");
  const wishlistCount = WishlistStore.getCount();
  wishlistBadges.forEach(el => {
    el.textContent = wishlistCount;
    el.style.display = wishlistCount > 0 ? "flex" : "none";
  });
}

// ==========================================================================
// THEME (DARK / LIGHT) CONTROLLER
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const themeToggles = document.querySelectorAll(".theme-toggle-btn");
  themeToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, nextTheme);
      updateThemeIcon(nextTheme);
      showToast("Theme Updated", `Switched to ${nextTheme === "dark" ? "Dark Noir" : "Light Elegance"} mode.`, "info");
    });
  });
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll(".theme-icon");
  icons.forEach(icon => {
    if (theme === "dark") {
      // Show sun icon when in dark mode to switch to light
      icon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
    } else {
      // Show moon icon when in light mode to switch to dark
      icon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
    }
  });
}

// ==========================================================================
// SEARCH AUTOCOMPLETE & NAVIGATION
// ==========================================================================
function initHeaderSearch() {
  const searchInput = document.getElementById("header-search-input");
  const searchDropdown = document.getElementById("search-results-dropdown");
  if (!searchInput || !searchDropdown) return;

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (val.length < 2) {
      searchDropdown.innerHTML = "";
      searchDropdown.classList.remove("is-open");
      return;
    }

    if (typeof ProductStore === "undefined") return;
    const matches = ProductStore.search(val);

    if (matches.length === 0) {
      searchDropdown.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No luxury pieces found for "<strong>${val}</strong>"
        </div>
      `;
      searchDropdown.classList.add("is-open");
      return;
    }

    searchDropdown.innerHTML = matches.slice(0, 5).map(prod => `
      <a href="product.html?id=${prod.id}" class="search-result-item">
        <img src="${prod.images[0]}" alt="${prod.name}">
        <div class="search-result-info">
          <div class="search-result-title">${prod.name}</div>
          <div class="search-result-price">₹${prod.price.toFixed(2)}</div>
        </div>
      </a>
    `).join("") + `
      <div style="padding: 10px 16px; background-color: var(--bg-secondary); text-align: center; border-top: 1px solid var(--border-color);">
        <a href="${matches[0].category}.html?q=${encodeURIComponent(val)}" style="font-size: 0.8rem; font-weight: 700; color: var(--accent-gold); text-transform: uppercase;">
          View all ${matches.length} matching pieces &rarr;
        </a>
      </div>
    `;

    searchDropdown.classList.add("is-open");
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove("is-open");
    }
  });
}

// ==========================================================================
// PRODUCT CARD GENERATOR (Reusable across all pages)
// ==========================================================================
function createProductCardHTML(product) {
  const inWishlist = WishlistStore.has(product.id);
  const badgeHTML = product.badge ? `
    <span class="product-badge ${
      product.badge.toLowerCase().includes('sale') ? 'badge-sale' :
      product.badge.toLowerCase().includes('new') ? 'badge-new' :
      product.badge.toLowerCase().includes('trend') ? 'badge-trending' : 'badge-bestseller'
    }">${product.badge}</span>
  ` : "";

  const discountPercent = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-card-image-box">
        ${badgeHTML}
        
        <div class="product-card-actions">
          <button class="card-action-btn ${inWishlist ? 'is-active' : ''}" 
                  onclick="handleWishlistClick(event, '${product.id}')" 
                  aria-label="Save to Wishlist" 
                  title="Add to Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <button class="card-action-btn" 
                  onclick="openQuickView(event, '${product.id}')" 
                  aria-label="Quick View" 
                  title="Quick View">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>

        <a href="product.html?id=${product.id}">
          <img src="${product.images[0]}" alt="${product.name}" class="product-card-img" loading="lazy">
        </a>

        <div class="product-card-quick-add">
          <button class="btn-card-add" onclick="handleQuickAdd(event, '${product.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Quick Add
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <div class="product-card-meta">
          <span class="product-card-category">${product.category} • ${product.subCategory}</span>
          <div class="product-card-rating">
            <span class="star">★</span>
            <span>${product.rating}</span>
          </div>
        </div>

        <h3 class="product-card-title">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>

        <div class="product-card-price-row">
          <span class="product-price-current">₹${product.price.toFixed(2)}</span>
          ${product.originalPrice > product.price ? `
            <span class="product-price-original">₹${product.originalPrice.toFixed(2)}</span>
            <span class="product-price-discount">-${discountPercent}%</span>
          ` : ""}
        </div>
      </div>
    </article>
  `;
}

// Handler functions for card interactions
function handleWishlistClick(e, productId) {
  e.preventDefault();
  e.stopPropagation();
  const added = WishlistStore.toggle(productId);
  const btn = e.currentTarget;
  if (added) {
    btn.classList.add("is-active");
    btn.querySelector("svg").setAttribute("fill", "currentColor");
  } else {
    btn.classList.remove("is-active");
    btn.querySelector("svg").setAttribute("fill", "none");
  }
}

function handleQuickAdd(e, productId) {
  e.preventDefault();
  e.stopPropagation();
  if (typeof ProductStore === "undefined") return;
  const prod = ProductStore.getById(productId);
  if (prod) {
    CartStore.add(prod, prod.sizes[0], prod.colors[0].name, 1);
  }
}

// ==========================================================================
// QUICK-VIEW MODAL
// ==========================================================================
let currentQuickViewProduct = null;
let currentQuickViewSize = null;
let currentQuickViewColor = null;
let currentQuickViewQty = 1;

function openQuickView(e, productId) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (typeof ProductStore === "undefined") return;
  const prod = ProductStore.getById(productId);
  if (!prod) return;

  currentQuickViewProduct = prod;
  currentQuickViewSize = prod.sizes[0];
  currentQuickViewColor = prod.colors[0].name;
  currentQuickViewQty = 1;

  let modal = document.getElementById("quick-view-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "quick-view-modal";
    modal.className = "modal-overlay quick-view-modal";
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <span class="section-eyebrow" style="margin-bottom: 0;">Quick Preview</span>
          <button class="modal-close-btn" onclick="closeQuickView()">&times;</button>
        </div>
        <div class="modal-body" id="quick-view-body"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (evt) => {
      if (evt.target === modal) closeQuickView();
    });
  }

  const body = document.getElementById("quick-view-body");
  body.innerHTML = `
    <div class="quick-view-grid">
      <div style="aspect-ratio: 3/4; overflow: hidden; border-radius: var(--radius-md); background: var(--bg-secondary);">
        <img id="qv-main-img" src="${prod.images[0]}" alt="${prod.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px;">
        <span class="product-card-category">${prod.category} • ${prod.subCategory}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-primary);">${prod.name}</h2>
        
        <div style="display: flex; align-items: baseline; gap: 12px;">
          <span style="font-size: 1.6rem; font-weight: 700; color: var(--text-primary);">₹${prod.price.toFixed(2)}</span>
          ${prod.originalPrice > prod.price ? `<span style="font-size: 1rem; color: var(--text-muted); text-decoration: line-through;">₹${prod.originalPrice.toFixed(2)}</span>` : ""}
          <span style="font-size: 0.85rem; color: var(--color-success); font-weight: 600;">In Stock</span>
        </div>

        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${prod.description}</p>

        <!-- Colors -->
        <div>
          <div class="option-label">Color: <span id="qv-color-name" style="font-weight: 400; text-transform: none;">${prod.colors[0].name}</span></div>
          <div class="color-swatches">
            ${prod.colors.map((c, i) => `
              <button class="color-swatch-btn ${i === 0 ? 'is-active' : ''}" 
                      style="background-color: ${c.hex};" 
                      title="${c.name}" 
                      onclick="selectQuickViewColor('${c.name}', this)"></button>
            `).join("")}
          </div>
        </div>

        <!-- Sizes -->
        <div>
          <div class="option-label">Size: <span id="qv-size-name" style="font-weight: 400; text-transform: none;">${prod.sizes[0]}</span></div>
          <div class="sizes-row">
            ${prod.sizes.map((s, i) => `
              <button class="size-pill-btn ${i === 0 ? 'is-active' : ''}" 
                      onclick="selectQuickViewSize('${s}', this)">${s}</button>
            `).join("")}
          </div>
        </div>

        <!-- Quantity and Add -->
        <div style="display: flex; gap: 12px; margin-top: 10px;">
          <div class="stepper">
            <button class="stepper-btn" onclick="updateQuickViewQty(-1)">-</button>
            <input class="stepper-input" id="qv-qty-input" value="1" readonly>
            <button class="stepper-btn" onclick="updateQuickViewQty(1)">+</button>
          </div>
          
          <button class="btn btn-primary" style="flex: 1;" onclick="submitQuickViewAdd()">
            Add to Bag • ₹${prod.price.toFixed(2)}
          </button>
        </div>

        <div style="margin-top: 8px;">
          <a href="product.html?id=${prod.id}" style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold); text-decoration: underline;">
            View Full Product Details &amp; Sizing Specs &rarr;
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) {
    modal.classList.remove("is-active");
    document.body.style.overflow = "";
  }
}

function selectQuickViewColor(colorName, btn) {
  currentQuickViewColor = colorName;
  document.getElementById("qv-color-name").textContent = colorName;
  btn.parentElement.querySelectorAll(".color-swatch-btn").forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");
}

function selectQuickViewSize(sizeName, btn) {
  currentQuickViewSize = sizeName;
  document.getElementById("qv-size-name").textContent = sizeName;
  btn.parentElement.querySelectorAll(".size-pill-btn").forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");
}

function updateQuickViewQty(delta) {
  currentQuickViewQty = Math.max(1, currentQuickViewQty + delta);
  document.getElementById("qv-qty-input").value = currentQuickViewQty;
}

function submitQuickViewAdd() {
  if (currentQuickViewProduct) {
    CartStore.add(currentQuickViewProduct, currentQuickViewSize, currentQuickViewColor, currentQuickViewQty);
    closeQuickView();
  }
}

// ==========================================================================
// COUNTDOWN TIMER (Flash Sale)
// ==========================================================================
function initCountdownTimer() {
  const hoursEl = document.getElementById("countdown-hours");
  const minsEl = document.getElementById("countdown-mins");
  const secsEl = document.getElementById("countdown-secs");

  if (!hoursEl || !minsEl || !secsEl) return;

  // Set 24 hour rolling window
  let remainingSeconds = 18 * 3600 + 45 * 60 + 20;

  const update = () => {
    remainingSeconds--;
    if (remainingSeconds < 0) remainingSeconds = 24 * 3600;

    const hrs = Math.floor(remainingSeconds / 3600);
    const mins = Math.floor((remainingSeconds % 3600) / 60);
    const secs = remainingSeconds % 60;

    hoursEl.textContent = String(hrs).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  };

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// HERO SLIDER CONTROLLER
// ==========================================================================
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;

  function goToSlide(index) {
    slides[currentSlide].classList.remove("is-active");
    if (dots[currentSlide]) dots[currentSlide].classList.remove("is-active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("is-active");
    if (dots[currentSlide]) dots[currentSlide].classList.add("is-active");
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5500);
  }

  function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
      startAutoPlay();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      goToSlide(idx);
      startAutoPlay();
    });
  });

  const heroSection = document.querySelector(".hero-slider-section");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoPlay);
    heroSection.addEventListener("mouseleave", startAutoPlay);
  }

  startAutoPlay();
}

// ==========================================================================
// NEWSLETTER SUBSCRIPTION
// ==========================================================================
function initNewsletter() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value) {
        showToast(
          "VIP Invitation Sent", 
          `Thank you for subscribing! Your 20% discount code 'VOGUE20' is now unlocked.`, 
          "success"
        );
        input.value = "";
      }
    });
  });
}

// ==========================================================================
// SCROLL EFFECTS & BACK TO TOP
// ==========================================================================
function initScrollEffects() {
  const header = document.querySelector(".site-header");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 50) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    if (backToTopBtn) {
      if (scrollY > 300) {
        backToTopBtn.classList.add("is-visible");
      } else {
        backToTopBtn.classList.remove("is-visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================================================
// MOBILE MENU NAVIGATION
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("is-active");
    navLinks.classList.toggle("is-open");
  });

  // Close when link clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggleBtn.classList.remove("is-active");
      navLinks.classList.remove("is-open");
    });
  });
}

// ==========================================================================
// DOM INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeaderSearch();
  initHeroSlider();
  initCountdownTimer();
  initNewsletter();
  initScrollEffects();
  initMobileMenu();
  updateBadges();

  // Esc key listener for any modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      const checkoutModal = document.getElementById("checkout-modal");
      if (checkoutModal) checkoutModal.classList.remove("is-active");
    }
  });
});
