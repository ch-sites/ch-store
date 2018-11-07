import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductSupplyState } from '../store';
import { ProductSupply } from '@Core/models';
import * as productSupplyActions from '@Core/modules/product-supply-core/store/product-supply.actions';
import * as productSupplySelectors from '@Core/modules/product-supply-core/store/product-supply.selectors';

@Injectable()
export class ProductSupplyStateService {

    constructor(private store: Store<ProductSupplyState>) { }

    public dispatchAddAction(productSupply: ProductSupply): void {
        this.store.dispatch(new productSupplyActions.AddProductSupply({ productSupply: productSupply }));
    }

    public dispatchDeleteAction(uid: string): void {
        this.store.dispatch(new productSupplyActions.DeleteProductSupply({ id: uid }));
    }

    public dispatchLoadProductSupplysAction(): void {
        this.store.dispatch(new productSupplyActions.LoadProductSupplys({}));
    }

    public dispatchUpdateAction(productSupply: ProductSupply): void {
        this.store.dispatch(new productSupplyActions.UpdateProductSupply({ productSupply: productSupply }));
    }

    public getProductSupply(uid: string): Observable<ProductSupply> {
        return this.store.pipe(
            select(productSupplySelectors.selectProductSupply)
        );
    }

    public getProductSupplyList(): Observable<Array<ProductSupply>> {
        return this.store.pipe(
            select(productSupplySelectors.selectAllProductSupply)
        );
    }

    public dispatchSelectProductSupplyAction(uid: string): void {
        this.store.dispatch(new productSupplyActions.SelectProductSupply({ productSupplyID: uid }));
    }
}
