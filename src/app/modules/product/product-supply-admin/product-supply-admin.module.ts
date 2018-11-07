import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMyDatePickerModule} from 'ngx-mydatepicker';

import { ProductSupplyAdminRoutingModule } from './product-supply-admin-routing.module';
import { AdminProductSupplyComponent } from './component/admin-product-supply';
import { EditProductSupplyComponent } from './component/edit-product-supply';
import { ListProductSupplyComponent } from './component/list-product-supply';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileUploadModule } from '@Core/modules/file-upload/file-upload.module';
import { ProductSupplyResolverService } from './resolvers';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MDBBootstrapModule,
        NgxDatatableModule,
        NgxMyDatePickerModule,
        NgSelectModule,
        ProductSupplyAdminRoutingModule,
        FileUploadModule
    ],
    declarations: [
        AdminProductSupplyComponent,
        EditProductSupplyComponent,
        ListProductSupplyComponent
    ],
    providers: [
        ProductSupplyResolverService
    ]
})
export class ProductSupplyAdminModule { }
