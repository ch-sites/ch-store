import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ProductBase } from '@Core/models';

export enum ProductBaseActionTypes {
    LOAD_PRODUCT_BASES = '[ProductBase] Load ProductBases',
    LOAD_PRODUCT_BASES_SUCCESS = '[ProductBase] Load ProductBases Success',
    ADD_PRODUCT_BASE = '[ProductBase] Add ProductBase',
    ADD_PRODUCT_BASE_SUCCESS = '[ProductBase] Add ProductBase Success',
    SELECT_PRODUCT_BASE = '[ProductBase] Select ProductBase',
    UpsertProductBase = '[ProductBase] Upsert ProductBase',
    AddProductBases = '[ProductBase] Add ProductBases',
    UpsertProductBases = '[ProductBase] Upsert ProductBases',
    UPDATE_PRODUCT_BASE = '[ProductBase] Update ProductBase',
    UPDATE_PRODUCT_BASE_SUCCESS = '[ProductBase] Update ProductBase Success',
    UpdateProductBases = '[ProductBase] Update ProductBases',
    DeleteProductBase = '[ProductBase] Delete ProductBase',
    DeleteProductBases = '[ProductBase] Delete ProductBases',
    ClearProductBases = '[ProductBase] Clear ProductBases'
}

export class LoadProductBases implements Action {
    readonly type = ProductBaseActionTypes.LOAD_PRODUCT_BASES;

    constructor(public payload: { }) { }
}

export class LoadProductBasesSuccess implements Action {
    readonly type = ProductBaseActionTypes.LOAD_PRODUCT_BASES_SUCCESS;

    constructor(public payload: { productBases: ProductBase[] }) { }
}

export class AddProductBase implements Action {
    readonly type = ProductBaseActionTypes.ADD_PRODUCT_BASE;

    constructor(public payload: { productBase: ProductBase }) { }
}

export class AddProductBaseSuccess implements Action {
    readonly type = ProductBaseActionTypes.ADD_PRODUCT_BASE_SUCCESS;

    constructor(public payload: { productBase: ProductBase }) { }
}

export class SelectProductBase implements Action {
    readonly type = ProductBaseActionTypes.SELECT_PRODUCT_BASE;

    constructor(public payload: { productBaseID: string }) { }
}

export class UpsertProductBase implements Action {
    readonly type = ProductBaseActionTypes.UpsertProductBase;

    constructor(public payload: { productBase: ProductBase }) { }
}

export class AddProductBases implements Action {
    readonly type = ProductBaseActionTypes.AddProductBases;

    constructor(public payload: { productBases: ProductBase[] }) { }
}

export class UpsertProductBases implements Action {
    readonly type = ProductBaseActionTypes.UpsertProductBases;

    constructor(public payload: { productBases: ProductBase[] }) { }
}

export class UpdateProductBase implements Action {
    readonly type = ProductBaseActionTypes.UPDATE_PRODUCT_BASE;

    constructor(public payload: { productBase: ProductBase }) { }
}

export class UpdateProductBaseSuccess implements Action {
    readonly type = ProductBaseActionTypes.UPDATE_PRODUCT_BASE_SUCCESS;

    constructor(public payload: { productBase: Update<ProductBase> }) { }
}

export class UpdateProductBases implements Action {
    readonly type = ProductBaseActionTypes.UpdateProductBases;

    constructor(public payload: { productBases: Update<ProductBase>[] }) { }
}

export class DeleteProductBase implements Action {
    readonly type = ProductBaseActionTypes.DeleteProductBase;

    constructor(public payload: { id: string }) { }
}

export class DeleteProductBases implements Action {
    readonly type = ProductBaseActionTypes.DeleteProductBases;

    constructor(public payload: { ids: string[] }) { }
}

export class ClearProductBases implements Action {
    readonly type = ProductBaseActionTypes.ClearProductBases;
}

export type ProductBaseActions =
    LoadProductBases
    | LoadProductBasesSuccess
    | AddProductBase
    | AddProductBaseSuccess
    | SelectProductBase
    | UpsertProductBase
    | AddProductBases
    | UpsertProductBases
    | UpdateProductBase
    | UpdateProductBaseSuccess
    | UpdateProductBases
    | DeleteProductBase
    | DeleteProductBases
    | ClearProductBases;
