import { ProductRepo } from "../repo/product.repo.js";

export class ProductService {
  constructor(productRepo = new ProductRepo()) {
    this.productRepo = productRepo;
  }
  async createProduct(productData) {
    const existing = await this.productRepo.findByName(productData.productName);
    if (existing) {
      const err = new Error("Product already exists");
      err.status = 409;
      throw err;
    }
    return this.productRepo.create(productData);
  }

  async getProducts() {
    return this.productRepo.findAll();
  }

  async getProductById(productId) {
    const product = await this.productRepo.findById(productId);
    if (!product) {
      const err = new Error("Product not found");
      err.status = 404;
      throw err;
    }
    return product;
  }

  async updateProduct(productId, data) {
    const updated = await this.productRepo.update(productId, data);
    if (!updated) {
      const err = new Error("Product not found");
      err.status = 404;
      throw err;
    }
    return updated;
  }

  async deleteProduct(productId) {
    const deleted = await this.productRepo.delete(productId);
    if (!deleted) {
      const err = new Error("Product not found");
      err.status = 404;
      throw err;
    }
    return deleted;
  }
}
