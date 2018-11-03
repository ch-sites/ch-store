import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { ProductBaseState } from '../store';
import { ProductBase } from '@Core/models';
import * as productBaseActions from '@Core/modules/product-base-core/store';
import * as productBaseSelectors from '@Core/modules/product-base-core/store/product-base.selectors';
import { Observable } from 'rxjs';

@Injectable()
export class ProductBaseStateService {

    constructor(private store: Store<ProductBaseState>) { }

    public dispatchAddAction(productBase: ProductBase): void {
        this.store.dispatch(new productBaseActions.AddProductBase({productBase: productBase}));
    }

    public dispatchDeleteAction(uid: string): void {
        this.store.dispatch(new productBaseActions.DeleteProductBase({id: uid}));
    }

     public dispatchLoadProductBasesAction(): void {
        this.store.dispatch(new productBaseActions.LoadProductBases({}));
    }

    public dispatchUpdateAction(productBase: ProductBase): void {
        this.store.dispatch(new productBaseActions.UpdateProductBase({ productBase: productBase }));
    }

    public getProductBase(uid: string): Observable<ProductBase> {
        return this.store.select(productBaseSelectors.selectProductBase);
    }

    public getProductBaseList(): Observable<Array<ProductBase>> {
        return this.store.select(productBaseSelectors.selectAllProductBase);
    }

    public dispatchSelectProductBaseAction(uid: string): void {
        this.store.dispatch(new productBaseActions.SelectProductBase({ productBaseID: uid }));
    }
}
