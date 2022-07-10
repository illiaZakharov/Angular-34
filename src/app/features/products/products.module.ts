import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';

@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductListItemComponent,
    ],
    imports: [
        ProductsRoutingModule,
        CommonModule,
        SharedModule,
    ],
    exports: [
        ProductComponent,
        ProductListComponent,
    ]
})
export class ProductsModule { }
