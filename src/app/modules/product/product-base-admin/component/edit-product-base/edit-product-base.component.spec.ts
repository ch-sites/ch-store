import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
    EditProductBaseComponent
} from '@Modules/product/product-base-admin/component/edit-product-base';

describe('EditProductBaseComponent', () => {
    let component: EditProductBaseComponent;
    let fixture: ComponentFixture<EditProductBaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditProductBaseComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditProductBaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
