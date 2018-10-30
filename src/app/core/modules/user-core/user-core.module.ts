import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataService } from '@Core/modules/user-core/services';

@NgModule({
    providers: [UserDataService],
    imports: [
        CommonModule
    ]
})
export class UserCoreModule { }
