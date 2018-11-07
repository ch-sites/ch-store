import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductSupplyComponent } from './component/admin-product-supply';
import { EditProductSupplyComponent } from './component/edit-product-supply';
import { ListProductSupplyComponent } from './component/list-product-supply';
import { ProductSupplyResolverService } from './resolvers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin-product-supply',
        pathMatch: 'full'
    },
    {
        path: 'admin-product-supply',
        component: AdminProductSupplyComponent,
        resolve: {data: ProductSupplyResolverService}
    },
    {
        path: 'edit-product-supply/:uid',
        component: EditProductSupplyComponent
    },
    {
        path: 'list-product-supply',
        component: ListProductSupplyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductSupplyAdminRoutingModule {}
