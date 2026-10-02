# 🛍️ Aura Atelier – Luxury & Modern Fashion E-Commerce Platform

A modern, responsive, and feature-complete **Fashion Shopping Website** built entirely using **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. Designed with a luxury aesthetic, smooth micro-interactions, dark/light theme toggle, and client-side persistence.

![Aura Atelier Preview Banner](https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80)

---

## 🌟 Key Features

### 1. 🏠 Multi-Page Experience
- **Home (`index.html`)**:
  - Interactive Hero Slider with auto-play, pause on hover, and slide controls.
  - Value propositions trust bar (Express delivery, 30-day returns, authentic materials, secure checkout).
  - Category showcase grid (Men's, Women's, Kids').
  - Dynamic "Trending Now" and "Best Sellers" showcases.
  - Flash Sale banner with a live ticking countdown timer.
  - VIP Newsletter subscription with immediate coupon unlock toast.
- **Men's Fashion (`men.html`)**:
  - T-Shirts, Shirts, Jeans, Trousers, Jackets, Boots, and Accessories.
  - Real-time subcategory filtering, price range slider, size chips, and sorting.
- **Women's Fashion (`women.html`)**:
  - Silk Gowns, Sarees, Chanderi Kurtis, Tops, Jeans, Handbags, and Stilettos.
  - Dynamic filter engine with live count and clear filters.
- **Kids' Fashion (`kids.html`)**:
  - Boys, Girls, GOTS Organic Cotton Sets, Party Tulles, and Flexi-Grip footwear.
- **Product Details (`product.html`)**:
  - Dynamic product loader via URL parameters (`?id=...`).
  - High-resolution multi-angle thumbnail image switcher.
  - Dynamic star ratings and client reviews counter.
  - Interactive color swatches and size pill selectors.
  - "Size & Fit Guide" modal.
  - Quantity stepper.
  - Instant "Add to Bag", "Buy Now", and "Wishlist" toggles.
  - Detailed product tabs: *Craftsmanship & Specs*, *Sizing Advice*, *Delivery & Returns*, and *Client Reviews*.
  - Curated "You May Also Like" and "Recently Viewed" shelves.
- **Shopping Bag & Checkout (`cart.html`)**:
  - Itemized table with selected size, color, quantity adjustments, and remove actions.
  - Dynamic Free Shipping progress tracker (unlocks free shipping above $150).
  - Working promotional coupons (`VOGUE20` for 20% off, `FIRST10` for 10% off, `AURA50` for orders > $200).
  - Accurate Subtotal, Shipping, Tax, and Grand Total computation.
  - **Interactive Multi-Step Checkout Modal**:
    - Step 1: Customer details & shipping address.
    - Step 2: Payment method (Credit/Debit Card, UPI, Cash on Delivery).
    - Step 3: Order Confirmation with uniquely generated Order ID (`#AURA-XXXXX-LUXE`).
- **Wishlist (`wishlist.html`)**:
  - Grid of bookmarked pieces.
  - "Move to Bag" and "Move All to Bag" functionality.
  - Persistent state in LocalStorage.

---

### 2. ⚡ Modern Functional Capabilities
- 🌓 **Dark / Light Mode**: Persistent theme switcher with custom CSS variables and seamless transitions.
- 🔍 **Live Search Autocomplete**: Header instant search bar that searches names, categories, and descriptions in real time with quick navigation links.
- 👁️ **Quick View Modal**: Preview any garment from any page with size/color selection and rapid add-to-bag without leaving the catalog.
- 🍞 **Toast Notification Engine**: Animated toasts for all user actions (Added to cart, Wishlist toggled, Coupon applied, Filters reset).
- 🏷️ **Dynamic Badges**: "Sale", "New", "Trending", and "Best Seller" badges with calculated discount percentages.
- 💾 **LocalStorage Integration**: Cart, Wishlist, Theme preference, and Recently Viewed products persist across sessions.
- ⬆️ **Back to Top**: Smooth scrolling button revealed upon scrolling down.

---

## 🎨 Design System & Aesthetics
- **Typography**:
  - *Playfair Display* for editorial headings.
  - *Plus Jakarta Sans* for clean, modern interface elements and numbers.
- **Color Palette**:
  - Pure Luxury Black: `#111111` / `#0e1116`
  - Crisp White & Light Gray: `#ffffff` / `#f8f9fa`
  - Royal Gold & Champagne Accent: `#c5a880` / `#d4af37`
- **Surface**: Subtle glassmorphism (`backdrop-filter: blur(16px)`), smooth border-radius, soft shadows, and responsive grid layouts.

---

## 📁 Project Structure

```text
fashion-shopping/
│
├── index.html            # Main Landing & Home Showcase
├── men.html              # Men's Fashion Catalog with Filters
├── women.html            # Women's Fashion Catalog with Filters
├── kids.html             # Kids' Fashion Catalog with Filters
├── product.html          # Product Details & Image Gallery
├── cart.html             # Shopping Bag & Multi-Step Checkout
├── wishlist.html         # User Wishlist & Saved Pieces
│
├── css/
│   └── style.css         # Complete Design System & Responsive Styles
│
├── js/
│   ├── products.js       # Complete Product Database & Query Helpers
│   ├── script.js         # Core Engine (Cart, Wishlist, Theme, Toasts, Modals)
│   └── filter.js         # Dynamic Filter & Sorting Engine for Catalog Pages
│
└── README.md             # Project Documentation & Architecture
```

---

## 🚀 Getting Started

No compilers, build tools, or npm installations are required. The project runs natively in modern web browsers.

### Option 1: Direct Browser Launch
1. Clone or download the repository.
2. Double-click `index.html` or right-click and select **Open with Chrome / Firefox / Edge / Safari**.

### Option 2: Run with VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom status bar, or right-click `index.html` and select **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500`.

### Option 3: Run with Python HTTP Server
```bash
# In the project directory:
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

---

## 🏷️ Testing Coupon Codes
Try the following promotional codes in the shopping cart (`cart.html`):
- `VOGUE20` - Unlocks **20% OFF** entire order.
- `FIRST10` - Unlocks **10% OFF** first purchase.
- `AURA50`  - Unlocks **$50 OFF** orders exceeding $200.

---

## 📱 Responsive Testing
The design has been verified across:
- **Mobile Viewports**: 360px – 480px (Collapsible drawer filters, sticky cart badges, responsive navigation)
- **Tablets**: 768px – 1024px (2 & 3 column product grids)
- **Desktop & Widescreen**: 1200px – 1920px (Full multi-column layout with sticky sidebar filters and galleries)

---

## 📄 License
This project is open-source and free to use for educational, personal, and portfolio purposes.
