import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductSupplyEffects } from './product-supply.effects';

describe('ProductSupplyEffects', () => {
    let actions$: Observable<any>;
    let effects: ProductSupplyEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductSupplyEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get(ProductSupplyEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
