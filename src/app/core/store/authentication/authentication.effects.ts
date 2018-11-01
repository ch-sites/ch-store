import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { map, switchMap, delay, catchError, mergeMap } from 'rxjs/operators';

import { User } from '@Core/models';
import * as authenticationActions from '@Core/store/authentication/authentication.actions';
import * as userActions from '@Core/store/user/user.actions';
import { Action } from '@ngrx/store';
import { AuthorizationService } from '@Core/modules/authorization/service/authorization.service';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private actions$: Actions,
        private afAuth: AngularFireAuth,
        private authorizationService: AuthorizationService
    ) { }

    @Effect()
    getUser: Observable<Action> = this.actions$
        .pipe(
            ofType(authenticationActions.GET_USER),
            map((action: authenticationActions.GetUser) => action.payload),
            switchMap(payload => this.afAuth.authState),
            delay(2000),
            mergeMap(authData => {
                const actions = [];

                if (authData) {
                    const user = {
                        uid: authData.uid,
                        displayName: authData.displayName,
                        email: authData.email,
                        photoURL: authData.photoURL
                    };

                    actions.push(new authenticationActions.Authenticated(user));
                    actions.push(new userActions.LoadUser({ user: user }));
                } else {
                    actions.push(new authenticationActions.NotAuthenticated());
                }

                return actions;
            }),
            catchError(err => of(new authenticationActions.AuthError()))
        );

    @Effect()
    login: Observable<Action> = this.actions$
        .pipe(
            ofType(authenticationActions.GOOGLE_LOGIN),
            map((action: authenticationActions.GoogleLogin) => action.payload),
            switchMap(payload => {
                return of(this.googleLogin());
            }),
            map(credential => {
                // successful login
                return new authenticationActions.GetUser();
            }),
            catchError(err => {
                return of(new authenticationActions.AuthError({ error: err.message }));
            })
        );

    @Effect()
    logout: Observable<Action> = this.actions$
        .pipe(
            ofType(authenticationActions.LOGOUT),
            map((action: authenticationActions.Logout) => action.payload),
            switchMap(payload => {
                return of(this.afAuth.auth.signOut());
            }),
            map(authData => {
                this.authorizationService.removeAll();

                return new authenticationActions.NotAuthenticated();
            }),
            catchError(err => of(new authenticationActions.AuthError({ error: err.message })))
        );

    private googleLogin(): Promise<any> {
        const provider = new firebase.auth.GoogleAuthProvider();

        return this.afAuth.auth.signInWithPopup(provider);
    }
}
