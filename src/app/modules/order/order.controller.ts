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
        const query = req.query;
        const result = await orderServices.getAllOrdersFromDB(query);
        if (result.length === 0) {
  res.status(404).json({
    success: false,
    message: "Order not found"
  });
} 
else if (query.email) {
  res.status(200).json({
    success: true,
    message: `Orders fetched successfully for ${query.email}`,
    data: result
  });
}
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
