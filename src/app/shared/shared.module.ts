import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
    declarations: [
        TruncatePipe
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        MaterialModule,
        TruncatePipe,
    ]
})
export class SharedModule { }
