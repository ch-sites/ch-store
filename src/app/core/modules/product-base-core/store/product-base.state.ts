import { EntityState } from '@ngrx/entity';

import { ProductBase } from '@Core/models';

export interface ProductBaseState extends EntityState<ProductBase> {
    loading: boolean;
    error: string;
    selectedProductBaseID: string;
}
