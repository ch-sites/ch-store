import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProductBaseAdminRoutingModule } from './product-base-admin-routing.module';
import { AdminProductBaseComponent } from './component/admin-product-base';
import { EditProductBaseComponent } from './component/edit-product-base';
import { ListProductBaseComponent } from './component/list-product-base';
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
        ProductBaseAdminRoutingModule
    ],
    declarations: [
        AdminProductBaseComponent,
        EditProductBaseComponent,
        ListProductBaseComponent
    ]
})
export class ProductBaseAdminModule { }
