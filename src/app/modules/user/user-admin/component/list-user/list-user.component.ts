import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '@Core/models';
import { UserStateService } from '@Core/modules/user-core/services/user-state.service';

@Component({
  selector: 'app-list-user',
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

    @Output() select = new EventEmitter<User>();

    constructor(private userStateService: UserStateService) {
        this.users$ = this.userStateService.getUserList();
    }

    ngOnInit() {
    }

    public onSelectUser({ selected }) {
        this.select.emit(selected[0]);
    }

}
