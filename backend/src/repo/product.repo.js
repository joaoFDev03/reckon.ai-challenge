import { Product } from "../model/product.model.js"
export class ProductRepo{

    async create(productData){
        return Product.insertOne(productData)
    }
    async findAll(){
        return Product.find()
    }
    async findById(productId){
        return Product.findById(productId)
    }
    async update(productId, data){
        return Product.findByIdAndUpdate(productId, data)
    }
    async delete(productId){
        return Product.findByIdAndDelete(productId)
    }
}