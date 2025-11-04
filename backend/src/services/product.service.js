import { ProductRepo } from "../repo/product.repo.js";
const productRepo = new ProductRepo()
export class ProductService{

    async createProduct(productData){
        return productRepo.create(productData)
    }

    async getProducts(){
        return productRepo.findAll()
    }
    async getProductById(productId){
        return productRepo.findById(productId)
    }
}