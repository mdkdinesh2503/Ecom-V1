# Shopie. — E-Commerce Website (V1)

A static, front-end e-commerce web application with a **customer storefront** and an **admin panel**. Built with HTML, CSS, and vanilla JavaScript. No build tools or backend—product data is loaded from a JSON file.

---

## Features

### Customer (Storefront)

- **Home** — Categories, banner, new arrivals, recommended products (loaded from `data/products.json`)
- **Products** — Product listing with filters (UI), ratings, discounts, and “Add to Cart” (UI only)
- **Contact** — Contact page with form
- **Login** — Username/password form; **admin** / **admin** → Admin Dashboard, any other → Products page
- **Register** — Sign-up with validation (mobile, email, password)

### Admin Panel

- **Dashboard** — Summary cards (Customers, Categories, Products, Orders, Reviews) and payables
- **Customers** — List, add, view customers
- **Categories** — Category management
- **Products** — List, add, edit, view products (data from `data/products.json`; edits are client-side only)
- **Orders** — List and view orders
- **Reviews** — List and view reviews
- **Settings** — Edit settings (UI)

---

## Tech Stack

- **HTML5** — Structure and pages
- **CSS3** — Styling (`css/style.css` for storefront, `css/styleAdmin.css` for admin)
- **JavaScript** — Product loading, form validation, login redirects
- **Data** — `data/products.json` for product catalog
- **External** — Font Awesome (icons), Google Fonts (Poppins, Nunito)

No Node/npm or build step. Works by opening HTML files or serving the folder with any static server.

---

## Project Structure

```
Ecom-V1/
├── index.html              # Home page
├── README.md
├── admin/                  # Admin panel
│   ├── adminDashboard.html
│   ├── adminCustomers.html
│   ├── adminAddCustomers.html
│   ├── adminViewCustomers.html
│   ├── adminCategories.html
│   ├── adminProducts.html
│   ├── adminAddProducts.html
│   ├── adminEditProducts.html
│   ├── adminViewProducts.html
│   ├── adminOrders.html
│   ├── adminViewOrders.html
│   ├── adminReviews.html
│   ├── adminViewReviews.html
│   ├── adminSettings.html
│   └── adminEditSettings.html
├── customer/               # Customer pages
│   ├── product.html
│   ├── contact.html
│   ├── login.html
│   └── register.html
├── css/
│   ├── style.css           # Storefront styles
│   └── styleAdmin.css      # Admin styles
├── js/
│   ├── script.js           # Storefront + login/register logic
│   └── adminScript.js      # Admin product list, validation, star rating
├── data/
│   └── products.json       # Product catalog
└── images/                 # Brand, auth, contact, home, products, misc
    ├── brand/
    ├── auth/
    ├── contact/
    ├── Home/
    ├── Products/
    └── misc/
```

---

## How to Run

1. **Clone or download** the project.
2. **Option A — Open in browser**  
   Open `index.html` in a browser. For full behavior (e.g. fetching `data/products.json`), use a local server to avoid CORS when loading JSON.
3. **Option B — Local server (recommended)**  
   From the project root:
   - **Python 3:** `python -m http.server 8000`  
   - **Node (npx):** `npx serve`  
   Then visit `http://localhost:8000` (or the port shown).

---

## Login

- **Admin:** username `admin`, password `admin` → redirects to `admin/adminDashboard.html`.
- **Any other credentials** → treated as customer, redirects to `customer/product.html`.

Credentials are checked in the browser only; there is no backend authentication.

---

## Product Data

Products are defined in `data/products.json`. Each item can have:

- `id`, `product_id`, `title`, `description`, `price`, `available`
- `category`, `rating` (e.g. `{ "rate": 5, "count": 250 }`)
- `image` (URL), `discount` (percentage)

The storefront and admin product list read this file via `fetch`. Adding/editing in the admin UI does not persist to the file (no backend).

---

## Image Assets

See `images/README.md` for the folder layout: `brand/`, `auth/`, `contact/`, `Home/`, `Products/`, `misc/`, etc. Some product images in the JSON use external URLs (e.g. GitHub raw links).

---

## Browser Support

Modern browsers that support ES6, `fetch`, and CSS variables. Tested with recent Chrome, Firefox, Edge, Safari.

---

## Possible Next Steps

- Add a simple backend (e.g. Node/Express) to persist products, orders, and users.
- Implement real cart and checkout (localStorage or server).
- Replace hardcoded admin login with proper auth and sessions.
- Add search and category filtering that use `products.json`.
- Ensure all product images are local or update `products.json` image URLs.

---

## License

Use for learning and academic projects. Adjust as needed for your course or portfolio.
