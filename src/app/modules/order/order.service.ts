import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.module";


const createOrderIntoDB = async (payload : TOrder) => {

    const product = await ProductModel.findById(payload.productId);
    if(!product){
        throw new Error("Product Not Found");
    }
    const result = await OrderModel.create(payload);
    return result;


}

const getAllOrdersFromDB = async ()  => {
    const result = OrderModel.find();
    return result;
}
 

export const orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB
}