import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { ProductBaseDataService } from '../services';
import * as productBaseActions from '@Core/modules/product-base-core/store/product-base.actions';


@Injectable()
export class ProductBaseEffects {

    constructor(
        private actions$: Actions,
        private productBaseDataService: ProductBaseDataService) { }

    @Effect()
    addProductBase: Observable<Action> = this.actions$
        .pipe(
            ofType(productBaseActions.ProductBaseActionTypes.ADD_PRODUCT_BASE),
            switchMap((state: productBaseActions.AddProductBase) =>
                this.productBaseDataService.add(state.payload.productBase).pipe(
                    map(productBase => {
                        return new productBaseActions.AddProductBaseSuccess(
                            { productBase: productBase });
                    })
                )
            )
        );

    @Effect()
    updateProductBase: Observable<Action> = this.actions$
        .pipe(
            ofType(productBaseActions.ProductBaseActionTypes.UPDATE_PRODUCT_BASE),
            switchMap((state: productBaseActions.UpdateProductBase) =>
                this.productBaseDataService.update(state.payload.productBase).pipe(
                    map(productBase => {
                        return new productBaseActions.UpdateProductBaseSuccess(
                            { productBase: { id: productBase.uid, changes: productBase } });
                    })
                )
            )
        );

    @Effect()
    loadProductBases: Observable<Action> = this.actions$
        .pipe(
            ofType(productBaseActions.ProductBaseActionTypes.LOAD_PRODUCT_BASES),
            switchMap((state: productBaseActions.LoadProductBases) =>
                this.productBaseDataService.list().pipe(
                    map(productBases => {
                        return new productBaseActions.LoadProductBasesSuccess(
                            { productBases: productBases });
                    })
                )
            )
        );
}
