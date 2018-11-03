import { TestBed, inject } from '@angular/core/testing';

import { ProductBaseStateService } from './product-base-state.service';

describe('ProductBaseStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductBaseStateService]
    });
  });

  it('should be created', inject([ProductBaseStateService], (service: ProductBaseStateService) => {
    expect(service).toBeTruthy();
  }));
});
