import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ProductSupply } from '@Core/models';

export enum ProductSupplyActionTypes {
    LOAD_PRODUCT_BASES = '[ProductSupply] Load ProductSupplys',
    LOAD_PRODUCT_BASES_SUCCESS = '[ProductSupply] Load ProductSupplys Success',
    ADD_PRODUCT_BASE = '[ProductSupply] Add ProductSupply',
    ADD_PRODUCT_BASE_SUCCESS = '[ProductSupply] Add ProductSupply Success',
    SELECT_PRODUCT_BASE = '[ProductSupply] Select ProductSupply',
    UpsertProductSupply = '[ProductSupply] Upsert ProductSupply',
    AddProductSupplys = '[ProductSupply] Add ProductSupplys',
    UpsertProductSupplys = '[ProductSupply] Upsert ProductSupplys',
    UPDATE_PRODUCT_BASE = '[ProductSupply] Update ProductSupply',
    UPDATE_PRODUCT_BASE_SUCCESS = '[ProductSupply] Update ProductSupply Success',
    UpdateProductSupplys = '[ProductSupply] Update ProductSupplys',
    DeleteProductSupply = '[ProductSupply] Delete ProductSupply',
    DeleteProductSupplys = '[ProductSupply] Delete ProductSupplys',
    ClearProductSupplys = '[ProductSupply] Clear ProductSupplys'
}

export class LoadProductSupplys implements Action {
    readonly type = ProductSupplyActionTypes.LOAD_PRODUCT_BASES;

    constructor(public payload: { }) { }
}

export class LoadProductSupplysSuccess implements Action {
    readonly type = ProductSupplyActionTypes.LOAD_PRODUCT_BASES_SUCCESS;

    constructor(public payload: { productSupplys: ProductSupply[] }) { }
}

export class AddProductSupply implements Action {
    readonly type = ProductSupplyActionTypes.ADD_PRODUCT_BASE;

    constructor(public payload: { productSupply: ProductSupply }) { }
}

export class AddProductSupplySuccess implements Action {
    readonly type = ProductSupplyActionTypes.ADD_PRODUCT_BASE_SUCCESS;

    constructor(public payload: { productSupply: ProductSupply }) { }
}

export class SelectProductSupply implements Action {
    readonly type = ProductSupplyActionTypes.SELECT_PRODUCT_BASE;

    constructor(public payload: { productSupplyID: string }) { }
}

export class UpsertProductSupply implements Action {
    readonly type = ProductSupplyActionTypes.UpsertProductSupply;

    constructor(public payload: { productSupply: ProductSupply }) { }
}

export class AddProductSupplys implements Action {
    readonly type = ProductSupplyActionTypes.AddProductSupplys;

    constructor(public payload: { productSupplys: ProductSupply[] }) { }
}

export class UpsertProductSupplys implements Action {
    readonly type = ProductSupplyActionTypes.UpsertProductSupplys;

    constructor(public payload: { productSupplys: ProductSupply[] }) { }
}

export class UpdateProductSupply implements Action {
    readonly type = ProductSupplyActionTypes.UPDATE_PRODUCT_BASE;

    constructor(public payload: { productSupply: ProductSupply }) { }
}

export class UpdateProductSupplySuccess implements Action {
    readonly type = ProductSupplyActionTypes.UPDATE_PRODUCT_BASE_SUCCESS;

    constructor(public payload: { productSupply: Update<ProductSupply> }) { }
}

export class UpdateProductSupplys implements Action {
    readonly type = ProductSupplyActionTypes.UpdateProductSupplys;

    constructor(public payload: { productSupplys: Update<ProductSupply>[] }) { }
}

export class DeleteProductSupply implements Action {
    readonly type = ProductSupplyActionTypes.DeleteProductSupply;

    constructor(public payload: { id: string }) { }
}

export class DeleteProductSupplys implements Action {
    readonly type = ProductSupplyActionTypes.DeleteProductSupplys;

    constructor(public payload: { ids: string[] }) { }
}

export class ClearProductSupplys implements Action {
    readonly type = ProductSupplyActionTypes.ClearProductSupplys;
}

export type ProductSupplyActions =
    LoadProductSupplys
    | LoadProductSupplysSuccess
    | AddProductSupply
    | AddProductSupplySuccess
    | SelectProductSupply
    | UpsertProductSupply
    | AddProductSupplys
    | UpsertProductSupplys
    | UpdateProductSupply
    | UpdateProductSupplySuccess
    | UpdateProductSupplys
    | DeleteProductSupply
    | DeleteProductSupplys
    | ClearProductSupplys;
