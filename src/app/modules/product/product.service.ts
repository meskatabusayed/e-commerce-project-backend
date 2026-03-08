import { TProduct } from "./product.interface"
import { ProductModel } from "./product.model"


const createProductIntoDB = async (product : TProduct) => {

    const result = await ProductModel.create(product);
    return result;


}

const getAllProductFromDB = async (searchTerm : string) => {
    const query: any = {};

  if (searchTerm) {
    query.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { brand: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
      {tags : {$regex: searchTerm, $options: "i"}}
    ];
  }

  const result = await ProductModel.find(query);
    return result;
}

const getSingleProductFromDB = async ( id  : any) => {
    const result = await ProductModel.findById(id);
    
    return result;
}

const updateSingleProductFromDB = async (id: string, payload: any) => {

  const result = await ProductModel.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
  console.log("re" , result);
  return result;
};


const deleteSingleProductFromDB = async (id: string) => {

  const result = await ProductModel.updateOne({ _id: id } , {isDeleted : true})
  return result;
};

export const productServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateSingleProductFromDB,
    deleteSingleProductFromDB,
}