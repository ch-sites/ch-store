import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSupplyDataService, ProductSupplyStateService } from './services';
import { StoreModule } from '@ngrx/store';
import * as fromProductSupply from './store/product-supply.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductSupplyEffects } from './store/product-supply.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('productSupply', fromProductSupply.reducer),
        EffectsModule.forFeature([ProductSupplyEffects])
    ],
    providers: [
        ProductSupplyDataService,
        ProductSupplyStateService
        ]
})
export class ProductSupplyCoreModule { }
