import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        CartListComponent,
        CartListItemComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        SharedModule,
    ]
})
export class CartModule { }
