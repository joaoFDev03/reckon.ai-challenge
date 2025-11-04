import { ProductService } from "../services/product.service.js";

const productService = new ProductService();

export async function createProduct(req, res, next) {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err)
  }
}

export async function getProducts(req, res, next) {
  const products = await productService.getProducts();
  res.json(products);
}

export async function getProductById(req, res, next) {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);  
  }
}

export async function updateProduct(req, res, next) {
  try {
    const updated = await productService.updateProduct(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    res.json(deleted);
  } catch (err) {
    next(err);
  }
}
