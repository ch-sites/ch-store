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
    loadChildren: '@Pages/admin/admin.module#AdminModule'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
