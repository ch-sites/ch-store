import { ProductBaseCoreModule } from './product-base-core.module';

describe('ProductCoreModule', () => {
    let productBaseCoreModule: ProductBaseCoreModule;

    beforeEach(() => {
        productBaseCoreModule = new ProductBaseCoreModule();
    });

    it('should create an instance', () => {
        expect(productBaseCoreModule).toBeTruthy();
    });
});
