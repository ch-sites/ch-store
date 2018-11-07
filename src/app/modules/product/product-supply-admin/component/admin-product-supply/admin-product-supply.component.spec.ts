import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductSupplyComponent } from './admin-product-supply.component';

describe('AdminProductSupplyComponent', () => {
    let component: AdminProductSupplyComponent;
    let fixture: ComponentFixture<AdminProductSupplyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminProductSupplyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminProductSupplyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
