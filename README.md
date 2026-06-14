# 🛒 BuySell Bangladesh

> **Bangladesh's #1 Online Marketplace** — Buy & Sell Anything Across All 64 Districts

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-0EA5E9?style=for-the-badge&logo=github)](https://YOUR-USERNAME.github.io/buysell-bangladesh/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-success?style=for-the-badge&logo=github)](https://pages.github.com/)

---

## 📋 Overview

BuySell Bangladesh is a modern, fully responsive, animated online marketplace website built entirely with **HTML5, CSS3, and Vanilla JavaScript** — zero backend, zero frameworks. It is 100% compatible with **GitHub Pages static hosting** and deploys instantly.

Designed with a professional glassmorphism UI, smooth animations, and Bangladesh-specific features including Taka (৳) currency, district-level filtering, and mobile payment methods (bKash, Nagad, Rocket).

---

## 🌐 Live Demo

```
https://YOUR-USERNAME.github.io/buysell-bangladesh/
```

> Replace `YOUR-USERNAME` with your actual GitHub username after deployment.

---

## 📁 File Structure

```
buysell-bangladesh/
│
├── index.html          # 🏠 Home Page (Hero, Categories, Products, Stats, FAQ)
├── products.html       # 🔍 Browse Products (Grid, Filters, Search)
├── product.html        # 📦 Product Detail (Gallery, Seller Info, Similar Items)
├── sell.html           # ✍️ Post Free Ad (4-Step Form + Success Animation)
├── categories.html     # 🗂️ All Categories (16 Categories)
├── about.html          # ℹ️ About Us (Story, Mission, Team, Stats)
├── contact.html        # 📞 Contact (Form, Office Info, Map Placeholder, FAQ)
│
├── css/
│   └── style.css       # 🎨 Complete Stylesheet (CSS Variables, Animations, Responsive)
│
├── js/
│   └── script.js       # ⚡ All JavaScript (Filters, Forms, Animations, Toast, FAQ)
│
├── assets/
│   └── images/         # 📸 Image assets directory
│
└── README.md           # 📖 This file
```

---

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism** navigation with blur backdrop
- **Sky Blue (#0EA5E9)** primary color system with CSS variables
- **Google Fonts** — Plus Jakarta Sans (headings) + Inter (body)
- **Font Awesome 6** icons throughout
- **Fully responsive** — Mobile, Tablet, Desktop
- **Professional corporate look** comparable to top marketplaces

### 🏠 Pages
| Page | Features |
|------|----------|
| **Home** | Animated hero, search with suggestions, categories, trending products, location grid, counters, testimonials, FAQ, newsletter, CTA |
| **Products** | Sidebar filters (category/location/price/condition), live search, grid/list view toggle, sort options |
| **Product Detail** | Emoji gallery (switchable), product info grid, seller card with stats, contact buttons, safety tips, similar items |
| **Sell / Post Ad** | 4-step multi-step form, image upload preview, animated success state |
| **Categories** | 16 category cards with icons and listing counts |
| **About** | Company story, mission/vision cards, team section, animated stats |
| **Contact** | Contact form, 2 office addresses, quick-action cards, embedded map placeholder, FAQ |

### 🇧🇩 Bangladesh-Specific
- **Taka (৳)** currency throughout
- **11 major cities** — Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Barishal, Rangpur, Mymensingh, Cox's Bazar, Gazipur, Narayanganj
- **64 districts** mentioned in stats
- **bKash, Nagad, Rocket** payment badges
- **SA Paribahan, Sundarban Courier, Pathao** delivery options
- Bangladesh-specific product examples and seller names

### ⚡ Animations
- Loading screen with animated progress bar
- Floating hero background shapes
- Scroll-triggered fade-in reveal (`IntersectionObserver`)
- Animated number counters (eased from 0)
- Product card hover lift effects
- Category icon spin & color change on hover
- Multi-step form transitions
- Success animation with scale-pop
- Toast notifications
- Sticky navbar with scroll shadow

### 🔧 Functionality
- Live product search (name, category, location)
- Price range filtering
- Category and location radio filters
- Wishlist toggle (heart button)
- Search suggestions autocomplete
- Gallery image switcher
- FAQ accordion
- Newsletter form
- Contact form
- Share button (Web Share API with clipboard fallback)
- View toggle (grid / list)
- Back-to-top button
- Mobile hamburger menu
- Recently viewed tracking (sessionStorage)

---

## 🚀 Deployment to GitHub Pages

### Method 1: Direct Upload (Easiest)

1. Create a new repository on GitHub named `buysell-bangladesh`
2. Click **"uploading an existing file"**
3. Drag and drop **all files and folders** from the `buysell-bangladesh/` directory
4. Click **"Commit changes"**
5. Go to **Settings → Pages**
6. Under **Source**, select `main` branch and `/ (root)` folder
7. Click **Save**
8. Your site will be live at: `https://YOUR-USERNAME.github.io/buysell-bangladesh/`

### Method 2: Git CLI

```bash
# Clone or initialize your repo
git clone https://github.com/YOUR-USERNAME/buysell-bangladesh.git
cd buysell-bangladesh

# Copy all project files into this folder, then:
git add .
git commit -m "🚀 Initial deployment — BuySell Bangladesh marketplace"
git push origin main

# Enable GitHub Pages in Settings → Pages → Branch: main / root
```

### Method 3: GitHub Desktop
1. Open GitHub Desktop → File → New Repository
2. Set local path to the `buysell-bangladesh` folder
3. Publish repository (make it public)
4. Enable GitHub Pages in repo Settings

---

## ⚙️ Local Development

No build tools required. Simply open any HTML file in your browser:

```bash
# Option 1: Just open the file
open index.html   # macOS
start index.html  # Windows

# Option 2: Use VS Code Live Server extension (recommended)
# Right-click index.html → Open with Live Server

# Option 3: Python simple server
python3 -m http.server 8080
# Then open: http://localhost:8080
```

---

## 🎨 Customization

### Change Primary Color
In `css/style.css`, update the `:root` variables:
```css
:root {
  --primary: #0EA5E9;       /* Main sky blue */
  --primary-dark: #0284C7;  /* Darker shade for hover */
  --primary-light: #38BDF8; /* Lighter shade */
  --primary-pale: #E0F2FE;  /* Very light for backgrounds */
}
```

### Add Real Products
In any HTML file, duplicate a `.product-card` block and update:
- `data-name`, `data-category`, `data-location`, `data-price` attributes
- The emoji/color in the image placeholder div
- Price, title, location, seller name, date

### Add Real Images
Replace the emoji placeholder divs with actual `<img>` tags:
```html
<!-- Replace this: -->
<div style="...font-size:4rem;">📱</div>

<!-- With this: -->
<img src="assets/images/iphone14.jpg" alt="iPhone 14 Pro" style="width:100%;height:100%;object-fit:cover;"/>
```

### Change Locations / Districts
Search for `<option>` elements in the `<select>` dropdowns in `sell.html`, `products.html`, and update as needed.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `< 480px` | Small phones |
| `< 768px` | Tablets & large phones |
| `< 1024px` | Small laptops |
| `≥ 1280px` | Desktop (max container width) |

---

## 🔌 External Dependencies (CDN — No Installation Required)

| Library | Version | Purpose |
|---------|---------|---------|
| [Font Awesome](https://fontawesome.com) | 6.5.0 | Icons |
| [Google Fonts](https://fonts.google.com) | — | Plus Jakarta Sans, Inter |

All other code is 100% vanilla — no npm, no build step.

---

## 📊 SEO

Every page includes:
- `<meta charset>` and `<meta viewport>`
- Descriptive `<title>` tags
- `<meta name="description">` content
- `<meta property="og:*">` Open Graph tags (on home page)
- Semantic HTML5 elements (`nav`, `main`, `section`, `footer`, `article`)
- Proper heading hierarchy (h1 → h2 → h3)
- `alt` attributes on images
- `aria-label` on interactive elements

---

## 🛡️ Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome | ✅ Full |
| Mobile Safari | ✅ Full |

> **Note:** `backdrop-filter` (glassmorphism) requires `-webkit-backdrop-filter` prefix for older Safari — already included in the CSS.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with ❤️ for Bangladesh 🇧🇩

---

## 🙏 Acknowledgements

- [Font Awesome](https://fontawesome.com/) for the icon library
- [Google Fonts](https://fonts.google.com/) for Plus Jakarta Sans and Inter
- Inspired by Bikroy.com, Shajgoj, and international marketplaces like OLX and Craigslist

---

> **"Empowering every Bangladeshi to buy and sell with confidence."**
> — BuySell Bangladesh

---

⭐ If you found this project useful, please give it a star on GitHub!
