import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataService } from '@Core/modules/user-core/services';
import { UserStateService } from './services/user-state.service';

@NgModule({
    providers: [
        UserDataService,
        UserStateService
    ],
    imports: [
        CommonModule
    ]
})
export class UserCoreModule { }
