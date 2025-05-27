import { z } from "zod";

export const productSchema = z.object({
    title:z.string().trim().min(6, {message:"Tên sản phẩm phải có tối thiểu 6 ký tự"}),
    price: z.number().min(5),
    description: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high'])
});