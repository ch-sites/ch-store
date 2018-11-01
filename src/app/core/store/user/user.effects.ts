import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, delay, catchError } from 'rxjs/operators';

import { User, Role } from '@Core/models';
import * as userActions from '@Core/store/user/user.actions';
import { UserDataService } from '@Core/modules/user-core/services';
import { AuthorizationService } from '@Core/modules/authorization/service/authorization.service';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userDataService: UserDataService,
        private authorizationService: AuthorizationService) { }

    @Effect()
    loadUser: Observable<Action> = this.actions$
        .ofType(userActions.LOAD_USER)
        .pipe(
            switchMap((state: userActions.LoadUser) =>
                this.userDataService.load(state.payload.user.uid).pipe(
                    map(user => {
                        if (user) {
                            this.authorizationService.addPermissionsToRole(user.roles[0], []);

                            return new userActions.LoadUserSuccess({ user: user })
                        }
                        else {
                            return new userActions.AddUser({ user: state.payload.user });
                        }
                    })
                )
            ));


    @Effect()
    addUser: Observable<Action> = this.actions$
        .ofType(userActions.ADD_USER)
        .pipe(
            switchMap((state: userActions.AddUser) =>
                this.userDataService.add(state.payload.user).pipe(
                    map(user => {
                        return new userActions.AddUserSuccess({ user: user })
                    })
                )
            )
        )
}
