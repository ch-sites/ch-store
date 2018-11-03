import { Component, OnInit } from '@angular/core';

import { ProductBase } from '@Core/models';
import { ProductBaseStateService } from '@Core/modules/product-base-core/services';

@Component({
    selector: 'app-admin-product-base',
    templateUrl: './admin-product-base.html',
    styleUrls: ['./admin-product-base.scss']
})
export class AdminProductBaseComponent implements OnInit {
    public selectedProductBase: ProductBase = null;

    constructor(private productBaseStateService: ProductBaseStateService) { }

    ngOnInit() {
        this.productBaseStateService.dispatchLoadProductBasesAction();
    }

    public deleteProductBase(): void {
        this.productBaseStateService.dispatchDeleteAction(this.selectedProductBase.uid);
    }

    public onSelectProductBase(productBase: ProductBase) {
        this.selectedProductBase = productBase;
    }

}
