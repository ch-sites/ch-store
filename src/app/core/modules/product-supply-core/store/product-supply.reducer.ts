import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductSupplyActions, ProductSupplyActionTypes } from './product-supply.actions';
import { ProductSupply } from '@Core/models';
import { ProductSupplyState } from './product-supply.state';

export const adapter: EntityAdapter<ProductSupply> = createEntityAdapter<ProductSupply>(
    {
        selectId: (model: ProductSupply) => model.uid,
    }
);

export const initialState: ProductSupplyState = adapter.getInitialState({
    loading: false,
    error: null,
    selectedProductSupplyID: null
});

export function reducer(
    state = initialState,
    action: ProductSupplyActions
): ProductSupplyState {
    switch (action.type) {
        case ProductSupplyActionTypes.ADD_PRODUCT_BASE_SUCCESS: {
            return adapter.addOne(action.payload.productSupply, state);
        }

        case ProductSupplyActionTypes.SELECT_PRODUCT_BASE: {
            return {
                ...state,
                loading: false,
                error: null,
                selectedProductSupplyID: action.payload.productSupplyID
            };
        }

        case ProductSupplyActionTypes.UpsertProductSupply: {
            return adapter.upsertOne(action.payload.productSupply, state);
        }

        case ProductSupplyActionTypes.AddProductSupplys: {
            return adapter.addMany(action.payload.productSupplys, state);
        }

        case ProductSupplyActionTypes.UpsertProductSupplys: {
            return adapter.upsertMany(action.payload.productSupplys, state);
        }

        case ProductSupplyActionTypes.UPDATE_PRODUCT_BASE_SUCCESS: {
            return adapter.updateOne(action.payload.productSupply, state);
        }

        case ProductSupplyActionTypes.UpdateProductSupplys: {
            return adapter.updateMany(action.payload.productSupplys, state);
        }

        case ProductSupplyActionTypes.DeleteProductSupply: {
            return adapter.removeOne(action.payload.id, state);
        }

        case ProductSupplyActionTypes.DeleteProductSupplys: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case ProductSupplyActionTypes.LOAD_PRODUCT_BASES_SUCCESS: {
            return adapter.addAll(action.payload.productSupplys, state);
        }

        case ProductSupplyActionTypes.ClearProductSupplys: {
            return adapter.removeAll(state);
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
