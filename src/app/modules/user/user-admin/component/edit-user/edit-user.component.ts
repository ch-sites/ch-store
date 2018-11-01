import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";

import { User } from '@Core/models';
import { UserDataService } from '@Core/modules/user-core/services';
import { Role } from '@Core/models/role.model';
import { RoleService } from '@Core/services';

@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.html',
    styleUrls: ['./edit-user.scss']
})
export class EditUserComponent implements OnInit {
    public user$: Observable<User>;
    public editedUser: User;
    public roles$: Observable<Role[]>;
    public userForm: FormGroup;
    public buttonAction = 'Create';

    constructor(
        private formBuilder: FormBuilder,
        private userDataService: UserDataService,
        private roleService: RoleService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group(
            {
                lastName: ['', Validators.required],
                firstName: ['', Validators.required],
                displayName: ['', Validators.required],
                email: ['', Validators.required],
                photoURL: ['', Validators.required],
                roles: ['', Validators.required],
                uid: ['']
            }
        );

        this.user$ = this.activatedRoute.paramMap
            .pipe(
                switchMap((params: ParamMap) => {
                    let uid = params.get('uid');

                    if (uid != '0') {
                        return this.userDataService.load(uid);
                    } else {
                        return Observable.create();
                    }
                })
            );

        this.user$.subscribe(user => {
            if (user) {
                this.userForm.patchValue({
                    lastName: user.lastName,
                    firstName: user.firstName,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    roles: user.roles,
                    uid: user.uid
                });

                this.editedUser = user;
                this.buttonAction = 'Update';
            }
        });

        this.roles$ = this.roleService.list();
    }

    public createUser(userModel: any) {
        this.roleService.get(userModel.roles).subscribe((role) => {
            let user = { ...userModel, role: role };

            this.userDataService.add(user);
        });
    }

    public updateUser(userModel: any) {
        this.roleService.get(userModel.roles).subscribe((role) => {
            let user: User = { uid: userModel.uid, ...userModel };

            if (role) {
                user.roles = [role.name];
            }

            this.userDataService.update(user);
        });
    }

    public onSubmit() {
        let userModel = this.userForm.value;

        if (this.editedUser) {
            this.updateUser(userModel);
        } else {
            this.createUser(userModel);
        }

        this.router.navigate(['../']);
    }
}
