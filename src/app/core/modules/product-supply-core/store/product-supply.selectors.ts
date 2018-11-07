import { ProductSupplyState } from './product-supply.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProductSupply from '@Core/modules/product-supply-core/store/product-supply.reducer';

export const selectProductSupplyState =
    createFeatureSelector<ProductSupplyState>('productSupply');

export const getError =
    (state: ProductSupplyState) => state.error;

export const getLoadingIndicator =
    (state: ProductSupplyState) => state.loading;

export const getSelectedProductSupplyID =
    (state: ProductSupplyState) => state.selectedProductSupplyID;

export const selectProductSupplyID = createSelector(
    selectProductSupplyState, getSelectedProductSupplyID);

export const selectProductSupplyEntities = createSelector(
    selectProductSupplyState, fromProductSupply.selectEntities);

export const selectAllProductSupply = createSelector(
    selectProductSupplyState, fromProductSupply.selectAll);

export const selectProductSupply = createSelector(
    selectProductSupplyEntities,
    selectProductSupplyID,
    (productSupplyEntities, productSupplyID) => productSupplyEntities[productSupplyID]
);
