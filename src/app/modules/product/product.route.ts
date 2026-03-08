import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router.post('/create-product' , productControllers.createProduct);
router.get('/' , productControllers.getAllProduct);
router.get('/:productId' , productControllers.getSingleProduct);
router.put('/:productId' , productControllers.updateSingleProduct);
router.delete('/:productId' , productControllers.deleteSingleProduct);



export const productRouter = router;