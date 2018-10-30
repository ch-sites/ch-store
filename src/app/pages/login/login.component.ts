import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AuthenticationState } from '@Core/store/authentication/authentication.state';
import * as authenticationActions from '@Core/store/authentication/authentication.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    authentication$: Observable<AuthenticationState>;

    constructor(
        private store: Store<AuthenticationState>,
        private router: Router
    ) { }

    ngOnInit() {
        this.authentication$ = this.store.select('authentication');

        this.store.dispatch(new authenticationActions.GetUser());
    }

    public signInWithGoogle(): void {
        this.store.dispatch(new authenticationActions.GoogleLogin());
    }

    public logout() {
        this.store.dispatch(new authenticationActions.Logout());
    }

    public afterSignIn(): void {
        this.router.navigate(['/']);
    }
}
