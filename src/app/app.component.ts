import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as authenticationActions from '@Core/store/authentication/authentication.actions';
import { AuthenticationState } from '@Core/store/authentication/authentication.state';
import { User } from '@Core/models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ch-store';
    authentication$: Observable<AuthenticationState>;
    currentUser: User = null;

    constructor(private store: Store<AuthenticationState>) { }

    ngOnInit() {
        this.authentication$ = this.store.select('authentication');
        this.authentication$.subscribe(authentication => {
            this.currentUser = authentication.user;
        })

        this.store.dispatch(new authenticationActions.GetUser());
    }

    logout() {
        this.store.dispatch(new authenticationActions.Logout());
    }

}
