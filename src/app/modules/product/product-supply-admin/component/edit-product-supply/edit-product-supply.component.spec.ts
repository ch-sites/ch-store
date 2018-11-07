import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
    EditProductSupplyComponent
} from '@Modules/product/product-supply-admin/component/edit-product-supply';

describe('EditProductSupplyComponent', () => {
    let component: EditProductSupplyComponent;
    let fixture: ComponentFixture<EditProductSupplyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditProductSupplyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditProductSupplyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
