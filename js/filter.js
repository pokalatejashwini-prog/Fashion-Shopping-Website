/**
 * Aura Atelier - Catalog Filtering & Sorting Engine
 * Drives Men, Women, and Kids collection pages
 */

class CatalogManager {
  constructor(category) {
    this.category = category;
    this.allProducts = [];
    this.filteredProducts = [];
    
    // Filter states
    this.selectedSubCategories = new Set();
    this.selectedSizes = new Set();
    this.maxPrice = 500;
    this.currentPriceLimit = 500;
    this.sortBy = "featured";
    this.searchQuery = "";

    this.init();
  }

  init() {
    if (typeof ProductStore === "undefined") {
      console.error("ProductStore is not loaded");
      return;
    }

    // Load category products
    this.allProducts = ProductStore.getByCategory(this.category);
    this.calculatePriceExtremes();

    // Check URL parameters for pre-selected subcategory or search
    const urlParams = new URLSearchParams(window.location.search);
    const subParam = urlParams.get("sub");
    const queryParam = urlParams.get("q");

    if (subParam) {
      this.selectedSubCategories.add(subParam.toLowerCase());
    }
    if (queryParam) {
      this.searchQuery = queryParam.toLowerCase();
    }

    this.setupUI();
    this.applyFilters();
  }

  calculatePriceExtremes() {
    if (this.allProducts.length === 0) return;
    const prices = this.allProducts.map(p => p.price);
    this.maxPrice = Math.ceil(Math.max(...prices));
    this.currentPriceLimit = this.maxPrice;
  }

  setupUI() {
    // Render dynamic subcategories checkboxes
    this.renderSubcategoryFilters();
    // Render dynamic size chips
    this.renderSizeChips();
    // Setup price slider
    this.setupPriceSlider();
    // Setup sort selector
    this.setupSortListener();
    // Setup clear all button
    this.setupClearButton();
    // Setup mobile filter drawer
    this.setupMobileFilterDrawer();
  }

  renderSubcategoryFilters() {
    const container = document.getElementById("subcategory-filters-container");
    if (!container) return;

    // Get unique subcategories
    const counts = {};
    this.allProducts.forEach(p => {
      counts[p.subCategory] = (counts[p.subCategory] || 0) + 1;
    });

    const subcats = Object.keys(counts).sort();

    container.innerHTML = subcats.map(sub => {
      const isChecked = this.selectedSubCategories.has(sub.toLowerCase());
      const label = sub.charAt(0).toUpperCase() + sub.slice(1);
      return `
        <label class="filter-checkbox-label">
          <div class="filter-checkbox-custom">
            <input type="checkbox" value="${sub}" ${isChecked ? 'checked' : ''} onchange="catalogManager.toggleSubCategory('${sub}', this.checked)">
            <span>${label}</span>
          </div>
          <span class="filter-count">(${counts[sub]})</span>
        </label>
      `;
    }).join("");
  }

  renderSizeChips() {
    const container = document.getElementById("size-chips-container");
    if (!container) return;

    // Extract all unique sizes
    const sizeSet = new Set();
    this.allProducts.forEach(p => {
      if (p.sizes) p.sizes.forEach(s => sizeSet.add(s));
    });

    const sizes = Array.from(sizeSet);

    container.innerHTML = sizes.map(size => {
      const isActive = this.selectedSizes.has(size);
      return `
        <button class="size-chip ${isActive ? 'is-active' : ''}" 
                onclick="catalogManager.toggleSize('${size}', this)">
          ${size}
        </button>
      `;
    }).join("");
  }

  setupPriceSlider() {
    const slider = document.getElementById("price-slider");
    const displayMax = document.getElementById("price-slider-value");
    if (!slider || !displayMax) return;

    slider.max = this.maxPrice;
    slider.value = this.maxPrice;
    displayMax.textContent = `₹${this.maxPrice}`;

    slider.addEventListener("input", (e) => {
      this.currentPriceLimit = parseFloat(e.target.value);
      displayMax.textContent = `₹${this.currentPriceLimit}`;
      this.applyFilters();
    });
  }

  setupSortListener() {
    const sortSelect = document.getElementById("catalog-sort-select");
    if (!sortSelect) return;

    sortSelect.addEventListener("change", (e) => {
      this.sortBy = e.target.value;
      this.applyFilters();
    });
  }

  setupClearButton() {
    const clearBtn = document.getElementById("clear-filters-btn");
    if (!clearBtn) return;

    clearBtn.addEventListener("click", () => {
      this.selectedSubCategories.clear();
      this.selectedSizes.clear();
      this.currentPriceLimit = this.maxPrice;
      this.sortBy = "featured";
      this.searchQuery = "";

      // Reset checkboxes
      const checkboxes = document.querySelectorAll("#subcategory-filters-container input[type='checkbox']");
      checkboxes.forEach(cb => cb.checked = false);

      // Reset chips
      const chips = document.querySelectorAll(".size-chip");
      chips.forEach(ch => ch.classList.remove("is-active"));

      // Reset slider
      const slider = document.getElementById("price-slider");
      const displayMax = document.getElementById("price-slider-value");
      if (slider && displayMax) {
        slider.value = this.maxPrice;
        displayMax.textContent = `₹${this.maxPrice}`;
      }

      // Reset sort
      const sortSelect = document.getElementById("catalog-sort-select");
      if (sortSelect) sortSelect.value = "featured";

      this.applyFilters();
      showToast("Filters Reset", "Showing all collection items.", "info");
    });
  }

  setupMobileFilterDrawer() {
    const triggerBtn = document.getElementById("mobile-filter-trigger");
    const sidebar = document.getElementById("catalog-sidebar");
    const closeBtn = document.getElementById("close-filter-drawer-btn");

    if (triggerBtn && sidebar) {
      triggerBtn.addEventListener("click", () => {
        sidebar.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    }

    if (closeBtn && sidebar) {
      closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    }
  }

  toggleSubCategory(sub, isChecked) {
    if (isChecked) {
      this.selectedSubCategories.add(sub.toLowerCase());
    } else {
      this.selectedSubCategories.delete(sub.toLowerCase());
    }
    this.applyFilters();
  }

  toggleSize(size, btnEl) {
    if (this.selectedSizes.has(size)) {
      this.selectedSizes.delete(size);
      btnEl.classList.remove("is-active");
    } else {
      this.selectedSizes.add(size);
      btnEl.classList.add("is-active");
    }
    this.applyFilters();
  }

  applyFilters() {
    let result = [...this.allProducts];

    // Filter by Subcategories
    if (this.selectedSubCategories.size > 0) {
      result = result.filter(p => this.selectedSubCategories.has(p.subCategory.toLowerCase()));
    }

    // Filter by Sizes
    if (this.selectedSizes.size > 0) {
      result = result.filter(p => {
        if (!p.sizes) return false;
        return p.sizes.some(s => this.selectedSizes.has(s));
      });
    }

    // Filter by Price limit
    result = result.filter(p => p.price <= this.currentPriceLimit);

    // Filter by search query if any
    if (this.searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(this.searchQuery) ||
        p.description.toLowerCase().includes(this.searchQuery) ||
        p.subCategory.toLowerCase().includes(this.searchQuery)
      );
    }

    // Sorting
    switch (this.sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        // Keep natural or trending first
        result.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
        break;
    }

    this.filteredProducts = result;
    this.renderResults();
  }

  renderResults() {
    const grid = document.getElementById("catalog-products-grid");
    const countEl = document.getElementById("catalog-count");
    if (!grid) return;

    if (countEl) {
      countEl.textContent = this.filteredProducts.length;
    }

    if (this.filteredProducts.length === 0) {
      grid.innerHTML = `
        <div class="catalog-empty-state" style="grid-column: 1 / -1;">
          <div class="catalog-empty-icon">✧</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">No matching pieces found</h3>
          <p style="color: var(--text-secondary); max-width: 400px; margin: 0 auto 20px auto;">
            Try adjusting your price range, clearing selected sizes, or removing subcategory filters.
          </p>
          <button class="btn btn-outline" onclick="catalogManager.setupClearButton && document.getElementById('clear-filters-btn').click()">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = this.filteredProducts.map(p => createProductCardHTML(p)).join("");
  }
}

// Global catalogManager instance (will be initiated on each category page)
let catalogManager = null;
