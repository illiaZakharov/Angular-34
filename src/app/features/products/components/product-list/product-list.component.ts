import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'app/features/products/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    productList: ProductModel[] = [];

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    private loadProducts(): void {
        this.productsService.getProducts().subscribe((prodcuts) => {
            this.productList = prodcuts;
        });
    }
}
