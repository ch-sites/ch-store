import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileSizePipe } from './pipes/file-size.pipe';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
    imports: [
        CommonModule,
        AngularFireStorageModule
    ],
    declarations: [
        DropZoneDirective,
        FileSizePipe,
        FileUploadComponent
    ],
    exports: [
        FileUploadComponent
    ]
})
export class FileUploadModule { }
