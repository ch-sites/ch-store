import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBaseDataService, ProductBaseStateService } from './services';
import { StoreModule } from '@ngrx/store';
import * as fromProductBase from './store/product-base.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductBaseEffects } from './store/product-base.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('productBase', fromProductBase.reducer),
        EffectsModule.forFeature([ProductBaseEffects])
    ],
    providers: [
        ProductBaseDataService,
        ProductBaseStateService
        ]
})
export class ProductBaseCoreModule { }
