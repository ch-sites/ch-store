import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductBaseComponent } from './component/admin-product-base';
import { EditProductBaseComponent } from './component/edit-product-base';
import { ListProductBaseComponent } from './component/list-product-base';
import { ProductBaseResolverService } from './resolvers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin-product-base',
        pathMatch: 'full'
    },
    {
        path: 'admin-product-base',
        component: AdminProductBaseComponent,
        resolve: {data: ProductBaseResolverService}
    },
    {
        path: 'edit-product-base/:uid',
        component: EditProductBaseComponent
    },
    {
        path: 'list-product-base',
        component: ListProductBaseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductBaseAdminRoutingModule {}
