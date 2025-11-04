import { ProductService } from "../services/product.service.js";

const productService = new ProductService()


export async function createProduct(req,res) {
    try{
        const product = await productService.createProduct(req.body)
        res.status(201).json(product)
    }catch (err){
        res.status(400).json({ error: err.message });

    }
}

export async function getProducts(req,res){
    const products = await productService.getProducts()
    res.json(products)
}
export async function getProductById(req,res) {
    const product = await productService.getProductById(req.params.id)
    res.json(product)
}