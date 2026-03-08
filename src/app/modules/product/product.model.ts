import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";


// Variant Schema
const variantSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
  },
);

// Inventory Schema
const inventorySchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
);

// Product Schema
const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    variants: {
      type: [variantSchema],
      default: [],
    },

    inventory: {
      type: inventorySchema,
      required: true,
    },

    isDeleted : {
  type: Boolean,
  default: false
},
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<TProduct>("Product", productSchema);