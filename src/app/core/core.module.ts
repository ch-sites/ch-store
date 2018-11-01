import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthenticationEffects } from '@Core/store/authentication/authentication.effects';
import { authenticationReducer } from '@Core/store/authentication/authentication.reducer';
import { UserEffects } from '@Core/store/user/user.effects';
import { UserReducer } from '@Core/store/user/user.reducer';
import { UserCoreModule } from './modules/user-core/user-core.module';
import { environment } from '../../environments/environment';
import { AuthenticationState } from './store/authentication/authentication.state';
import { UserState } from './store/user/user.state';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RoleService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { NgxPermissionsModule } from 'ngx-permissions';

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
