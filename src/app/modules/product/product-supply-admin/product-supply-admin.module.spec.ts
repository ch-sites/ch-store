import { ProductSupplyAdminModule } from './product-supply-admin.module';

describe('ProductSupplyAdminModule', () => {
    let userAdminModule: ProductSupplyAdminModule;

    beforeEach(() => {
        userAdminModule = new ProductSupplyAdminModule();
    });

    it('should create an instance', () => {
        expect(userAdminModule).toBeTruthy();
    });
});
