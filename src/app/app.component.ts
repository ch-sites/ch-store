import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User }         from '@Core/models/user.model';
import * as authenticationActions from '@Core/store/authentication/authentication.actions';
import { AuthenticationState } from '@Core/store/authentication/authentication.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'zs-results';
    authentication$: Observable<AuthenticationState>;

    constructor(private store: Store<AuthenticationState>) { }

    ngOnInit() {
        this.authentication$ = this.store.select('authentication');

        this.store.dispatch(new authenticationActions.GetUser());
    }

    googleLogin() {
        this.store.dispatch(new authenticationActions.GoogleLogin());
    }

    logout() {
        this.store.dispatch(new authenticationActions.Logout());
    }

}
