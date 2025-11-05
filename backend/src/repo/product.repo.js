import { Product } from "../model/product.model.js";
export class ProductRepo {
    
  async create(productData) {
    return Product.create(productData);
  }

  async findAll() {
    return Product.find().lean();
  }
  
  async findById(productId) {
    return Product.findById(productId).lean();
  }

  async findByName(productName) {
    return Product.findOne({ productName: productName });
  }

  async update(productId, data) {
    return Product.findByIdAndUpdate(productId, data, {
      new: true,
      runValidators: true,
    });
  }

  async delete(productId) {
    return Product.findByIdAndDelete(productId);
  }
}
