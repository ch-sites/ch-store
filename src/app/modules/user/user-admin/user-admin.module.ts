import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { AdminUserComponent } from './component/admin-user';
import { EditUserComponent } from './component/edit-user';
import { ListUserComponent } from './component/list-user';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MDBBootstrapModule,
        NgxDatatableModule,
        NgSelectModule,
        UserAdminRoutingModule
    ],
    declarations: [
        AdminUserComponent,
        EditUserComponent,
        ListUserComponent
    ]
})
export class UserAdminModule { }
