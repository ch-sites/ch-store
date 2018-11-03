import { ProductBaseState } from "./product-base.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromProductBase from '@Core/modules/product-base-core/store/product-base.reducer';

export const selectProductBaseState =
    createFeatureSelector<ProductBaseState>('productBase');

export const getError =
    (state: ProductBaseState) => state.error;

export const getLoadingIndicator =
    (state: ProductBaseState) => state.loading;

export const getSelectedProductBaseID =
    (state: ProductBaseState) => state.selectedProductBaseID;

export const selectProductBaseID = createSelector(
    selectProductBaseState, getSelectedProductBaseID);

export const selectProductBaseEntities = createSelector(
    selectProductBaseState, fromProductBase.selectEntities);

export const selectAllProductBase = createSelector(
    selectProductBaseState, fromProductBase.selectAll);

export const selectProductBase = createSelector(
    selectProductBaseEntities,
    selectProductBaseID,
    (productBaseEntities, productBaseID) => productBaseEntities[productBaseID]
);
