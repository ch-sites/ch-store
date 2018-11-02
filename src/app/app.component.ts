import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as authenticationActions from '@Core/modules/authentication/store';
import { AuthenticationState } from '@Core/modules/authentication/store';
import { User } from '@Core/models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ch-store';
    authentication$: Observable<AuthenticationState>;
    currentUser: User = null;

    constructor(
        private router: Router,
        private store: Store<AuthenticationState>) { }

    ngOnInit() {
        this.authentication$ = this.store.select('authentication');
        this.authentication$.subscribe(authentication => {
            this.currentUser = authentication.user;
        });

        this.store.dispatch(new authenticationActions.GetUser());
    }

    logout() {
        this.store.dispatch(new authenticationActions.Logout());

        this.router.navigate(['/']);
    }

}
