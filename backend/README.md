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
│ └─ product.service.js

tests/
├─ integration/
│ └─ products.api.test.js
├─ unit/
│ └─product.service.test.js
│ └─validateProduct.test.js
│ └─errorHandler.test.js

```
# Setup & Execution
``` bash 
npm install

npm run start

npm test

```

# Endpoints & Examples
#### POST /products
```bash 
Body
{
  "productName": "<teste>",
  "description": "testeD",
  "price": 2.5
}
Expected response
{
  "_id": "abc123",
  "productName": "<teste>",
  "description": "testeD",
  "price": 2.5
}
```

#### DELETE /products/:id
```bash 
Body
{
  "productName": "<teste>",
  "description": "testeD",
  "price": 2.5
}
Expected response
{
  "_id": "abc123",
  "productName": "<teste>",
  "description": "testeD",
  "price": 2.5
}
```

#### PUT /products/:id
```bash 
Body
{
  "productName": "Banana Premium",
  "price": 3
}
Expected response
{
  "_id": "abc123",
  "productName": "Banana Premium>",
  "description": "testeD",
  "price": 3
}
```

#### GET /products/:id
```bash 
Params
{
  "_id": "abc123",

}
Expected response
{
  "_id": "abc123",
  "productName": "<teste>",
  "description": "testeD",
  "price": 2.5
}
```

#### GET /products
```bash 
Expected response
[
  {
    "_id": "abc123",
    "productName": "<teste>",
    "description": "testeD",
    "price": 2.5
  }
]
```