import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductBase } from '@Core/models';
import { ProductBaseStateService } from '@Core/modules/product-base-core/services';

@Component({
  selector: 'app-list-product-base',
  templateUrl: './list-product-base.html',
  styleUrls: ['./list-product-base.scss']
})
export class ListProductBaseComponent implements OnInit {
    public productBases$: Observable<ProductBase[]>;
    public selected = [];
    public columns = [
        { name: 'Name' },
        { name: 'Category ' }
    ];

    @Output() select = new EventEmitter<ProductBase>();

    constructor(private productBaseStateService: ProductBaseStateService) {
        this.productBases$ = this.productBaseStateService.getProductBaseList();
    }

    ngOnInit() {
    }

    public onSelectProductBase({ selected }) {
        this.select.emit(selected[0]);
    }

}
