import { Component, OnInit } from '@angular/core';

import { ProductSupply } from '@Core/models';
import { ProductSupplyStateService } from '@Core/modules/product-supply-core/services';

@Component({
    selector: 'app-admin-product-supply',
    templateUrl: './admin-product-supply.html',
    styleUrls: ['./admin-product-supply.scss']
})
export class AdminProductSupplyComponent implements OnInit {
    public selectedProductSupply: ProductSupply = null;

    constructor(private productSupplyStateService: ProductSupplyStateService) { }

    ngOnInit() {}

    public deleteProductSupply(): void {
        this.productSupplyStateService.dispatchDeleteAction(this.selectedProductSupply.uid);
    }

    public onSelectProductSupply(productSupply: ProductSupply) {
        this.selectedProductSupply = productSupply;
    }

}
