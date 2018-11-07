import { TestBed, inject } from '@angular/core/testing';

import { ProductSupplyDataService } from './product-supply-data.service';

describe('ProductSupplyDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductSupplyDataService]
        });
    });

    it('should be created', inject([ProductSupplyDataService], (service: ProductSupplyDataService) => {
        expect(service).toBeTruthy();
    }));
});
