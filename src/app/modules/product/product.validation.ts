import { z } from "zod";

const variantSchema = z.object({
  type: z.string().min(1, "Variant type is required"),
  value: z.string().min(1, "Variant value is required"),
});

const inventorySchema = z.object({
  quantity: z.number().min(0, "Quantity cannot be negative"),
  inStock: z.boolean(),
});

export const productValidationSchema = z.object({
 name: z.string().min(1, "Product name is required"),

  description: z.string().min(1, "Description is required"),

  price: z.number().min(0, "Price must be positive"),

  category: z.string().min(1, "Category is required"),

  tags: z.array(z.string()),

  variants: z.array(variantSchema),

  inventory: inventorySchema,

  isDeleted: z.boolean(),
});