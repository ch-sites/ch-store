import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
}, {
    path: 'admin',
    data: {
        permissions: {
            only: ['ADMIN']
        },
        redirectTo: ''
    },
    canLoad: [NgxPermissionsGuard],
    loadChildren: '@Modules/user/user-admin/user-admin.module#UserAdminModule'
}, {
    path: 'admin-product-base',
    data: {
        permissions: {
            only: ['ADMIN']
        },
        redirectTo: ''
    },
    canLoad: [NgxPermissionsGuard],
    loadChildren:
        '@Modules/product/product-base-admin/product-base-admin.module#ProductBaseAdminModule'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
