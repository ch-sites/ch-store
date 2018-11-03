import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductBaseEffects } from './product-base.effects';

describe('ProductBaseEffects', () => {
    let actions$: Observable<any>;
    let effects: ProductBaseEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductBaseEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get(ProductBaseEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
