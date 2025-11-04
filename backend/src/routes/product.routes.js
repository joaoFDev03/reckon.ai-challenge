import { Router } from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.controller.js';

import { validateProduct } from '../middleware/validateProduct.js';
const router = Router();

router.get('/',getProducts);
router.get('/:id',getProductById)
router.post('/',validateProduct, createProduct)
router.put('/:id',validateProduct, updateProduct)
router.delete('/:id',deleteProduct)
export default router;
