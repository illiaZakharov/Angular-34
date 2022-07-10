import { Category } from "app/features/products/models/product.model";

export interface CartItemModel {
    id: number;
    name: string;
    price: number;
    category: Category;
    quantity: number;
    
    srcImg: string;
}