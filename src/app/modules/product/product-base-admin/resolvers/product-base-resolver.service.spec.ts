import { TestBed, inject } from '@angular/core/testing';
import { ProductBaseResolverService } from './product-base-resolver.service';

describe('ProductBaseResolverService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductBaseResolverService]
        });
    });

    it('should be created', inject([ProductBaseResolverService], (service: ProductBaseResolverService) => {
        expect(service).toBeTruthy();
    }));
});
