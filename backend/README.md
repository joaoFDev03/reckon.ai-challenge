# reckon.ai-challenge BACKEND
# Products API


Simple API for product management, built on **Node.js + Express + Mongoose**, with **Jest + Supertest** for testing (unit and integration).

---

## Features

- Create products
- List all products
- List product by ID
- Update product information
- Delete product
- Payload validation (middleware)
- Centralized error handling
- Unit Testing and Integration

---

## Technologies

| Technology | Use |
|------------|-----|
| Node.js | Runtime |
| Express | API |
| Mongoose | ODM |
| Jest | Tests |
| Supertest | HTTP integration tests |
| MongoMemoryServer | Mongo tests |

---

## Project Structure
```bash 
src/
├─ app.js
├─ server.js
├─ config/
│ └─ db.js
├─ controllers/
│ └─ product.controller.js
├─ middleware/
│ ├─ validateProduct.js
│ └─ errorHandler.js
├─ model/
│ └─ product.model.js
├─ repo/
│ └─ product.repo.js
└─ services/
└─ product.service.js

tests/
├─ integration/
│ └─ products.api.test.js
├─ unit/
├─ product.service.test.js
├─ validateProduct.test.js
└─ errorHandler.test.js