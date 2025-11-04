import { Product } from "../model/product.model.js"
export class ProductRepo{

    async create(productData){
        return await Product.insertOne(productData)
    }
    async findAll(){
        return await Product.find()
    }
    async findById(productId){
        return await Product.findById(productId)
    }
}