# Product Frontend

This is a **Single Page Application (SPA)** for managing products via the [Products API](https://github.com/joaoFDev03/reckon.ai-challenge/tree/main/backend).  
It allows you to **create, read, update, and delete products**, with filtering, pagination, and a responsive interface.

---

## Table of Contents

- [Features](#features)  
- [Files](#files)  
- [Setup](#setup)  
- [Code Structure](#code-structure)  
- [Responsiveness and UX](#responsiveness-and-ux)

---

## Features

- Load products directly from the backend (`GET /products`).  
- Create new products (`POST /products`) with validation.  
- Edit existing products through a clean modal interface.  
- Delete products with a confirmation modal.  
- Filter products by name in real time.  
- Configurable pagination with intuitive navigation.  
- Clear error messages for the user.  
- Fully responsive layout for all screen sizes.

---

## Files

### `main.js`  
Initializes the product list, filters, pagination, and form events.  
Also handles opening edit and delete modals.

### `filter.js`  
Handles filtering products by name (`filterByName`) and updates the rendered list and pagination dynamically.

### `pagination.js`  
`paginate` function that creates dynamic pagination.  
Controls page numbers, items per page, and button states.

### `productapi.js`  
API interaction functions:  
- `getProducts(API)` → fetch all products.  
- `createProduct(API, body)` → create a new product.  
- `updateProduct(API, id, body)` → update an existing product.  
- `deleteProduct(API, id)` → delete a product.

### `render.js`  
`render(list, items)` converts product data into interactive cards with edit and delete buttons.

### `style.css`  
- Base styles for layout, responsive grid, cards, and forms.  
- Centralized, styled modals with smooth transitions.  
- Pagination and buttons with hover and active states.  
- Stylized inputs and selects for better user experience.

---

## Setup

1. Clone the repository:  
   ```bash
   git clone <repo-url>
   cd <repo>
2. open index.html (requires running backend)

## Code Structure
```bash
js/
├─ filter.js
├─ main.js
├─ pagination.js
├─ product.api.js
├─ render.js
```
