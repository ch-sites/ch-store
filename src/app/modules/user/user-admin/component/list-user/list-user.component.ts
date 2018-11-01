import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '@Core/models';
import { UserDataService } from '@Core/modules/user-core/services';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.html',
  styleUrls: ['./list-user.scss']
})
export class ListUserComponent implements OnInit {
    public users$: Observable<User[]>;
    public selected = [];
    public columns = [
        { name: 'FirstName' },
        { name: 'LastName ' },
        { name: 'DisplayName' },
        { name: 'Email' }
    ];

    @Output() onSelect = new EventEmitter<User>();

    constructor(private userDataService: UserDataService) {
        this.users$ = this.userDataService.list();
    }

    ngOnInit() {
    }

    public onSelectUser({ selected }) {
        this.onSelect.emit(selected[0]);
    }

}
