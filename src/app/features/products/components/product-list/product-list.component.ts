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
      // а что по поводу отписки?
      // у вас поток, конечно, конечный, но все же
      // где-то надо знать что поток конечный, а где-то бесконечный
        this.productsService.getProducts().subscribe((products) => {
            this.productList = products;
        });
    }
}
