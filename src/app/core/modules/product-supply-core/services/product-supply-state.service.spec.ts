import { TestBed, inject } from '@angular/core/testing';

import { ProductSupplyStateService } from './product-supply-state.service';

describe('ProductSupplyStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSupplyStateService]
    });
  });

  it('should be created', inject([ProductSupplyStateService], (service: ProductSupplyStateService) => {
    expect(service).toBeTruthy();
  }));
});
