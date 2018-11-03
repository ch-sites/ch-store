import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductBaseActions, ProductBaseActionTypes } from './product-base.actions';
import { ProductBase } from '@Core/models';
import { ProductBaseState } from './product-base.state';

export const adapter: EntityAdapter<ProductBase> = createEntityAdapter<ProductBase>(
    {
        selectId: (model: ProductBase) => model.uid,
    }
);

export const initialState: ProductBaseState = adapter.getInitialState({
    loading: false,
    error: null,
    selectedProductBaseID: null
});

export function reducer(
    state = initialState,
    action: ProductBaseActions
): ProductBaseState {
    switch (action.type) {
        case ProductBaseActionTypes.ADD_PRODUCT_BASE_SUCCESS: {
            return adapter.addOne(action.payload.productBase, state);
        }

        case ProductBaseActionTypes.SELECT_PRODUCT_BASE: {
            return {
                ...state,
                loading: false,
                error: null,
                selectedProductBaseID: action.payload.productBaseID
            };
        }

        case ProductBaseActionTypes.UpsertProductBase: {
            return adapter.upsertOne(action.payload.productBase, state);
        }

        case ProductBaseActionTypes.AddProductBases: {
            return adapter.addMany(action.payload.productBases, state);
        }

        case ProductBaseActionTypes.UpsertProductBases: {
            return adapter.upsertMany(action.payload.productBases, state);
        }

        case ProductBaseActionTypes.UPDATE_PRODUCT_BASE_SUCCESS: {
            return adapter.updateOne(action.payload.productBase, state);
        }

        case ProductBaseActionTypes.UpdateProductBases: {
            return adapter.updateMany(action.payload.productBases, state);
        }

        case ProductBaseActionTypes.DeleteProductBase: {
            return adapter.removeOne(action.payload.id, state);
        }

        case ProductBaseActionTypes.DeleteProductBases: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case ProductBaseActionTypes.LOAD_PRODUCT_BASES_SUCCESS: {
            return adapter.addAll(action.payload.productBases, state);
        }

        case ProductBaseActionTypes.ClearProductBases: {
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
