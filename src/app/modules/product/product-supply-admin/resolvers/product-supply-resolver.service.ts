import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ProductSupplyStateService } from '@Core/modules/product-supply-core/services';
import { ProductBaseStateService } from '@Core/modules/product-base-core/services';

@Injectable()
export class ProductSupplyResolverService implements Resolve<void>{
    constructor(
        private productBaseStateService: ProductBaseStateService,
        private productSupplyStateService: ProductSupplyStateService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.productBaseStateService.dispatchLoadProductBasesAction();
        this.productSupplyStateService.dispatchLoadProductSupplysAction();
    }
}
