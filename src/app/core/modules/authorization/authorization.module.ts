import { NgModule } from '@angular/core';

import { NgxPermissionsService, NgxPermissionsStore} from 'ngx-permissions';

import { AuthorizationService } from '@Core/modules/authorization/services';

@NgModule({
    exports: [],
    imports: [],
    providers: [
        AuthorizationService,
        NgxPermissionsService,
        NgxPermissionsStore
    ]
})

export class AuthorizationModule { }
