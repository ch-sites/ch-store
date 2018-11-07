import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
    ListProductSupplyComponent
} from '@Modules/product/product-supply-admin/component/list-product-supply';

describe('ListProductSupplyComponent', () => {
    let component: ListProductSupplyComponent;
    let fixture: ComponentFixture<ListProductSupplyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListProductSupplyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListProductSupplyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
