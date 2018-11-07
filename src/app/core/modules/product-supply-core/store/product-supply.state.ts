import { EntityState } from '@ngrx/entity';

import { ProductSupply } from '@Core/models';

export interface ProductSupplyState extends EntityState<ProductSupply> {
    loading: boolean;
    error: string;
    selectedProductSupplyID: string;
}
