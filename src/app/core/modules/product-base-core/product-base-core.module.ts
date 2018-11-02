import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBaseDataService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ProductBaseDataService]
})
export class ProductBaseCoreModule { }
