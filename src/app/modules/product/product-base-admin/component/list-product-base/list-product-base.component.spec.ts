import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
    ListProductBaseComponent
} from '@Modules/product/product-base-admin/component/list-product-base';

describe('ListProductBaseComponent', () => {
    let component: ListProductBaseComponent;
    let fixture: ComponentFixture<ListProductBaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListProductBaseComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListProductBaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
