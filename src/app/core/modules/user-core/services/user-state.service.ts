import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UserState } from '../store';
import * as userActions from '@Core/modules/user-core/store/user.actions';
import * as userSelectors from '@Core/modules/user-core/store/user.selectors';
import { Observable } from 'rxjs';
import { User } from '@Core/models';

@Injectable()
export class UserStateService {

    constructor(private store: Store<UserState>) { }

    public dispatchLoadUsersAction(): void {
        this.store.dispatch(new userActions.LoadUsers({}));
    }

    public getUserList(): Observable<Array<User>> {
        return this.store.pipe(
            select(userSelectors.selectAllUser)
        );
    }
}
