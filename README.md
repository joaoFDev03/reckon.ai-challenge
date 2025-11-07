# Reckon.ai Challenge – Products Management

This project consists of a **[Backend API](https://github.com/joaoFDev03/reckon.ai-challenge/tree/main/backend)** and a **[Frontend SPA](https://github.com/joaoFDev03/reckon.ai-challenge/tree/main/frontend)** for managing products.  
The backend provides a RESTful API for CRUD operations, while the frontend consumes it with a dynamic, responsive interface.

---

## Overview

- **Backend**: Node.js + Express + Mongoose API for managing products. Includes validation, centralized error handling, and tests.  
- **Frontend**: Single Page Application (SPA) that interacts with the API to create, read, update, delete, filter, and paginate products. Fully responsive and user-friendly.

---

## Features

- **Backend**
  - Handles all CRUD operations for products, checks data with middleware, manages errors.

- **Frontend**
  - Shows products as cards you can interact with, lets you search on the fly, edit or delete via modals, switch pages easily, works well on any screen, and gives clear error messages.

---

## Technologies

| Layer | Technology | Purpose |
|-------|------------|---------|
| Backend | Node.js | Runtime environment |
|         | Express | REST API framework |
|         | Mongoose | MongoDB ODM |
|         | Jest | Unit tests |
|         | Supertest | API integration tests |
|         | MongoMemoryServer | In-memory database for testing |
| Frontend | HTML/CSS/JS | SPA interface |
|         | Fetch API | Communicate with backend |
|         | Vanilla JS modules | Modular frontend logic (filter, pagination, render) |

---

## Setup

### Backend

```bash
cd backend
npm install
npm run start      # Starts the server
npm test   
```

## Challanges Faced
- **Frontend**
    - Making the UI responsive
    - pagination
    - Handle filters without breaking pagination
- **Backend**
    - Ensure robust validation for data
    - Simulating a real database in tests using MongoMemoryServer.1
