import { ProductBaseAdminModule } from './product-base-admin.module';

describe('ProductBaseAdminModule', () => {
    let userAdminModule: ProductBaseAdminModule;

    beforeEach(() => {
        userAdminModule = new ProductBaseAdminModule();
    });

    it('should create an instance', () => {
        expect(userAdminModule).toBeTruthy();
    });
});
