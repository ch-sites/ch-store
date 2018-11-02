import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPermissionsModule } from 'ngx-permissions';

import {
    AuthenticationEffects,
    authenticationReducer,
    AuthenticationState
} from '@Core/modules/authentication/store';
import { UserEffects, UserReducer, UserState } from '@Core/modules/user-core/store';
import { UserCoreModule } from './modules/user-core/user-core.module';
import { RoleService } from './services';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { environment } from '../../environments/environment';

export interface State {
    authentication: AuthenticationState;
    user: UserState;
}

export const reducers: ActionReducerMap<State> = {
    authentication: authenticationReducer,
    user: UserReducer
};

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AuthorizationModule,
        NgxPermissionsModule.forChild(),
        UserCoreModule,
        EffectsModule.forRoot([
            AuthenticationEffects,
            UserEffects
        ]),
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        MDBBootstrapModule
    ],
    providers: [RoleService]
})
export class CoreModule { }
