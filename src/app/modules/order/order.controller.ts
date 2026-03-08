import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder = async (req : Request , res : Response) => {
    try {
        const {order} = req.body;
        const result = await orderServices.createOrderIntoDB(order);
        res.status(200).json({
            success : true,
            message : "Order Create Successfully",
            data : result

        })

    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message || "Something Went Wrong",
            data : error

        })
        
    }
}

const getAllOrders = async (req : Request , res : Response) => {
    try {
        const result = await orderServices.getAllOrdersFromDB();
        res.status(200).json({
            success : true,
            message : "Orders fetched successfully!",
            data : result

        })

    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message || "Something Went Wrong",
            data : error

        })
        
    }
}



export const orderControllers = {
    createOrder, 
    getAllOrders,
}
