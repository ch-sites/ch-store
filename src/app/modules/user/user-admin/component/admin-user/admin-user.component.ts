import { Component, OnInit } from '@angular/core';
import { User } from '@Core/models';
import { UserDataService } from '@Core/modules/user-core/services';

@Component({
    selector: 'admin-user',
    templateUrl: './admin-user.html',
    styleUrls: ['./admin-user.scss']
})
export class AdminUserComponent implements OnInit {
    private selectedUser: User = null;

    constructor(private userDataService: UserDataService) { }

    ngOnInit() { }

    private deleteUser(): void {
        this.userDataService.delete(this.selectedUser).subscribe(user => {
            this.selectedUser = null;
        });
    }

    private onSelectUser(user: User) {
        this.selectedUser = user;
    }

}
