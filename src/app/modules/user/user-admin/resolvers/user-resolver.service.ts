import { Injectable } from '@angular/core';

import { UserStateService } from '@Core/modules/user-core/services/user-state.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UserResolverService implements Resolve<void> {

    constructor(private userStateService: UserStateService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.userStateService.dispatchLoadUsersAction();
    }
}
