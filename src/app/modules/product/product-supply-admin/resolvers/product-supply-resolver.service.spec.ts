import { TestBed, inject } from '@angular/core/testing';
import { ProductSupplyResolverService } from './product-supply-resolver.service';

describe('ProductSupplyResolverService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductSupplyResolverService]
        });
    });

    it('should be created', inject([ProductSupplyResolverService], (service: ProductSupplyResolverService) => {
        expect(service).toBeTruthy();
    }));
});
