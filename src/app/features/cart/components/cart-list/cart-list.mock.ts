import { Category } from "app/features/products/models/product.model";
import { CartItemModel } from "../../models/cart-item.model";

export const cartListMock: Array<CartItemModel> = [
    {
        id: 0,
        name: 'Apple MacBook Pro',
        price: 8100,
        category: Category.Laptops,
        quantity: 1,

        srcImg: 'https://content1.rozetka.com.ua/goods/images/big/271166202.jpg'
    },
    {
        id: 4,
        name: 'Apple iPhone 13 Pro Max',
        price: 1499,
        category: Category.Phones,
        quantity: 1,

        srcImg: 'https://content.rozetka.com.ua/goods/images/big/259416201.jpg'
    },
    {
        id: 8,
        name: 'Apple iPad mini 2021',
        price: 1100,
        category: Category.Tablets,
        quantity: 1,

        srcImg: 'https://content.rozetka.com.ua/goods/images/big/224016785.jpg'
    },
]