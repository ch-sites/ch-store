import { ProductSupplyCoreModule } from './product-supply-core.module';

describe('ProductCoreModule', () => {
    let productSupplyCoreModule: ProductSupplyCoreModule;

    beforeEach(() => {
        productSupplyCoreModule = new ProductSupplyCoreModule();
    });

    it('should create an instance', () => {
        expect(productSupplyCoreModule).toBeTruthy();
    });
});
