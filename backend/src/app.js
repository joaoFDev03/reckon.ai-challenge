import express from "express";
import productRoutes from "./routes/product.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();

app.use(express.json());
app.use("/products", productRoutes);
app.use(errorHandler)
export default app;
