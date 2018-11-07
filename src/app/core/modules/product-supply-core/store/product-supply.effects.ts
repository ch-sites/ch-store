import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { ProductSupplyDataService } from '../services';
import * as productSupplyActions from '@Core/modules/product-supply-core/store/product-supply.actions';


@Injectable()
export class ProductSupplyEffects {

    constructor(
        private actions$: Actions,
        private productSupplyDataService: ProductSupplyDataService) { }

    @Effect()
    addProductSupply: Observable<Action> = this.actions$
        .pipe(
            ofType(productSupplyActions.ProductSupplyActionTypes.ADD_PRODUCT_BASE),
            switchMap((state: productSupplyActions.AddProductSupply) =>
                this.productSupplyDataService.add(state.payload.productSupply).pipe(
                    map(productSupply => {
                        return new productSupplyActions.AddProductSupplySuccess(
                            { productSupply: productSupply });
                    })
                )
            )
        );

    @Effect()
    updateProductSupply: Observable<Action> = this.actions$
        .pipe(
            ofType(productSupplyActions.ProductSupplyActionTypes.UPDATE_PRODUCT_BASE),
            switchMap((state: productSupplyActions.UpdateProductSupply) =>
                this.productSupplyDataService.update(state.payload.productSupply).pipe(
                    map(productSupply => {
                        return new productSupplyActions.UpdateProductSupplySuccess(
                            { productSupply: { id: productSupply.uid, changes: productSupply } });
                    })
                )
            )
        );

    @Effect()
    loadProductSupplys: Observable<Action> = this.actions$
        .pipe(
            ofType(productSupplyActions.ProductSupplyActionTypes.LOAD_PRODUCT_BASES),
            switchMap((state: productSupplyActions.LoadProductSupplys) =>
                this.productSupplyDataService.list().pipe(
                    map(productSupplys => {
                        return new productSupplyActions.LoadProductSupplysSuccess(
                            { productSupplys: productSupplys });
                    })
                )
            )
        );
}
