import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductSupply } from '@Core/models';
import { ProductSupplyStateService } from '@Core/modules/product-supply-core/services';

@Component({
  selector: 'app-list-product-supply',
  templateUrl: './list-product-supply.html',
  styleUrls: ['./list-product-supply.scss']
})
export class ListProductSupplyComponent implements OnInit {
    public productSupplys$: Observable<ProductSupply[]>;
    public selected = [];
    public columns = [
        { name: 'Product' },
        { name: 'Supplier' },
        { name: 'Quantity' },
        { name: 'Price ' }
    ];

    @Output() select = new EventEmitter<ProductSupply>();

    constructor(private productSupplyStateService: ProductSupplyStateService) {
        this.productSupplys$ = this.productSupplyStateService.getProductSupplyList();
    }

    ngOnInit() {
    }

    public onSelectProductSupply({ selected }) {
        this.select.emit(selected[0]);
    }

}
