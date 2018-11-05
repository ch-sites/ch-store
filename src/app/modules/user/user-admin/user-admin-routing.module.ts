import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserComponent } from './component/admin-user';
import { EditUserComponent } from './component/edit-user';
import { ListUserComponent } from './component/list-user';
import { UserResolverService } from './resolvers';

const userRoutes: Routes = [
    {
        path: '',
        redirectTo: 'admin-users',
        pathMatch: 'full'
    },
    {
        path: 'admin-users',
        component: AdminUserComponent,
        resolve: {data: UserResolverService}
    },
    {
        path: 'edit-user/:uid',
        component: EditUserComponent
    },
    {
        path: 'list-user',
        component: ListUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserAdminRoutingModule {}
