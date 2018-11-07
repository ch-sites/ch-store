import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxPermissionsGuard } from 'ngx-permissions';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
}, {
    path: 'main',
    component: AdminComponent,
    pathMatch: 'full',
}, {
    path: 'user-admin',
    data: {
        permissions: {
            only: ['ADMIN']
        },
        redirectTo: ''
    },
    canLoad: [NgxPermissionsGuard],
    loadChildren: '@Modules/user/user-admin/user-admin.module#UserAdminModule'
}, {
    path: 'product-base-admin',
    data: {
        permissions: {
            only: ['ADMIN']
        },
        redirectTo: ''
    },
    canLoad: [NgxPermissionsGuard],
    loadChildren:
        '@Modules/product/product-base-admin/product-base-admin.module#ProductBaseAdminModule'
},
{
    path: 'product-supply-admin',
    data: {
        permissions: {
            only: ['ADMIN']
        },
        redirectTo: ''
    },
    canLoad: [NgxPermissionsGuard],
    loadChildren:
        '@Modules/product/product-supply-admin/product-supply-admin.module#ProductSupplyAdminModule'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
