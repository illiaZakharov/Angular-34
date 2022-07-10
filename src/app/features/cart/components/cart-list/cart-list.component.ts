import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { cartListMock } from './cart-list.mock';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
    productList: CartItemModel[] = [];

    get totalPrice(): number {
        return this.productList.reduce((prev, curr) => prev + curr.price, 0);
    }

    ngOnInit(): void {
        this.loadProducts();
    }

    removeItemFromList(index: number): void {
        this.productList?.splice(index, 1);
    }

    trackByItems(index: number, item: CartItemModel): number {
        return item.id;
    }

    onSubmitOrder(): void {
        console.log('Order submitted');
    }

    private loadProducts(): void {
        this.productList = cartListMock;
    }
}
