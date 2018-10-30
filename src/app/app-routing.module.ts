import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';

const routes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },{
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    }, {
        path: 'admin',
        loadChildren: './modules/user/user-admin/user-admin.module#UserAdminModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
