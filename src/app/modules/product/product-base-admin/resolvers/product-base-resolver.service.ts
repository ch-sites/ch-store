import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ProductBaseStateService } from '@Core/modules/product-base-core/services';

@Injectable()
export class ProductBaseResolverService implements Resolve<void>{
    constructor(private productBaseStateService: ProductBaseStateService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.productBaseStateService.dispatchLoadProductBasesAction();
    }
}
