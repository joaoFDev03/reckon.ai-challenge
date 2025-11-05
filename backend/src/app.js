import express from "express";
import productRoutes from "./routes/product.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors())
app.use("/products", productRoutes);
app.use(errorHandler)
export default app;
