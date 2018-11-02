import { TestBed, inject } from '@angular/core/testing';

import { ProductBaseDataService } from './product-base-data.service';

describe('ProductBaseDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductBaseDataService]
        });
    });

    it('should be created', inject([ProductBaseDataService], (service: ProductBaseDataService) => {
        expect(service).toBeTruthy();
    }));
});
