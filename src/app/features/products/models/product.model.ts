export interface ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    
    srcImg: string;
}

export enum Category {
    Phones = 'Phone',
    Tablets = 'Tablet',
    Laptops = 'Laptop',
    TVs = 'TV',
}