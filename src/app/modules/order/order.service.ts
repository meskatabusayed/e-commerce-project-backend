import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.module";


const createOrderIntoDB = async (payload : TOrder) => {

    const product = await ProductModel.findById(payload.productId);

if (!product) {
  throw new Error("Product Not Found");
} 
else if (product.inventory.quantity < payload.quantity) {
  throw new Error("Insufficient stock");
}

const result = await OrderModel.create(payload);

// quantity reduce
product.inventory.quantity = product.inventory.quantity - payload.quantity;

// update stock status
if (product.inventory.quantity === 0) {
  product.inventory.inStock = false;
}

await product.save();

return result;


}

const getAllOrdersFromDB = async (query : any)  => {
    const result = OrderModel.find(query);
    return result;
}
 

export const orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB
}