import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductBaseComponent } from './admin-product-base.component';

describe('AdminProductBaseComponent', () => {
    let component: AdminProductBaseComponent;
    let fixture: ComponentFixture<AdminProductBaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminProductBaseComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminProductBaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
