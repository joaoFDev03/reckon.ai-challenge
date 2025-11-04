import { ProductRepo } from "../repo/product.repo.js";
const productRepo = new ProductRepo();
export class ProductService {
  async createProduct(productData) {
    return productRepo.create(productData);
  }

  async getProducts() {
    return productRepo.findAll();
  }
  
  async getProductById(productId) {
    const product = await productRepo.findById(productId);
    if (!product) {
      const err = new Error("Product not found");
      err.status = 404;
      throw err;
    }
    return product;
  }

  async updateProduct(productId, data) {
    const updated = await productRepo.update(productId, data);
    if (!updated) {
      const err = new Error("Product not found");
      err.status = 404;
      throw err;
    }
    return updated;
  }

  async deleteProduct(productId) {
    const deleted = await productRepo.delete(productId);
    if (!deleted) {
      const err = new Error("Product not found");
      err.status = 404;
      throw err;
    }
    return deleted;
  }
}
