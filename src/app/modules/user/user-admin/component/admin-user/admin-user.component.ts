import { Component, OnInit } from '@angular/core';
import { User } from '@Core/models';
import { UserDataService } from '@Core/modules/user-core/services';

@Component({
    selector: 'admin-user',
    templateUrl: './admin-user.html',
    styleUrls: ['./admin-user.scss']
})
export class AdminUserComponent implements OnInit {
    public selectedUser: User = null;

    constructor(private userDataService: UserDataService) { }

    ngOnInit() { }

    public deleteUser(): void {
        this.userDataService.delete(this.selectedUser).subscribe(user => {
            this.selectedUser = null;
        });
    }

    public onSelectUser(user: User) {
        this.selectedUser = user;
    }

}
