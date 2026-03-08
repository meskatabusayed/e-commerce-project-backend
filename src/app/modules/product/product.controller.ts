import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req : Request , res : Response) => {
    try {
        const {product} = req.body;
        const result = await productServices.createProductIntoDB(product);
        res.status(200).json({
            success : true,
            message : "Product Create Successfully",
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

const getAllProduct = async (req : Request , res : Response) => {
    try {
        
        const { searchTerm } = req.query;
        const result = await productServices.getAllProductFromDB(searchTerm as string);
        if(searchTerm){
            res.status(200).json({
            success : true,
            message : `Products matching search term '${searchTerm}' fetched successfully!`,
            data : result

        })
        }
        res.status(200).json({
            success : true,
            message : "Products fetched successfully!",
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

const getSingleProduct = async (req : Request , res : Response) => {
    try {
        const {productId} = req.params;
        const result = await productServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success : true,
            message : "Products fetched successfully!",
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

const updateSingleProduct = async (req : Request , res : Response) => {
    try {
        const {productId} = req.params;
        const payload = req.body.product;
        const result = await productServices.updateSingleProductFromDB(productId as string, payload )

        res.status(200).json({
            success : true,
            message : "Product update successfully!",
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

const deleteSingleProduct = async (req : Request , res : Response) => {
    try {
        const {productId} = req.params;
        const result = await productServices.deleteSingleProductFromDB(productId as string )

        res.status(200).json({
            success : true,
            message : "Product deleted successfully!",
            data : null

        })
        
    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message || "Something Went Wrong",
            data : error

        })
    }
}



export const productControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct

}