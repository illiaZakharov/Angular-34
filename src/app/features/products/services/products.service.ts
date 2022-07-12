import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ProductModel } from 'app/features/products/models/product.model';
import { productListMock } from '../components/product-list/product-list.mock';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    getProducts(): Observable<ProductModel[]> {
        return of(productListMock);
    }

    getProductById(id: number): Observable<ProductModel | null> {
      // может быть тут filter заменить на find?
      // не надо будет добавлять [0]
      // и для чего добавляется null?
        return of(productListMock.filter((product => product.id === id))[0] || null);
    }
}
