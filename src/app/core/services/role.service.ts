import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Role } from "@Core/models/role.model";

@Injectable()
export class RoleService {
    private roles: Array<Role>;

    constructor(public httpClient: HttpClient) {
        this.roles = new Array<Role>();
    }

    create(role: Role): Observable<Role> {
        this.roles.push(role);

        return new Observable<Role>(observer => {
            observer.next(role);
        });
    }

    delete(role: Role): Observable<Role> {
        this.get(role.id).subscribe(role => {
            let index = this.roles.indexOf(role);

            this.roles.splice(index, 1);
        });

        return new Observable<Role>(observer => {
            observer.next(role);
        });
    }

    get(id: string): Observable<Role> {
        return new Observable<Role>(observer => {
            let role: Role;

            this.roles.forEach(item => {
                if (item.id === id) {
                    role = item;
                }
            });

            observer.next(role);
        })
    }

    list(): Observable<Role[]> {
        return this.httpClient.get<Role[]>('assets/roles.json')
            .pipe(
                map(data => {
                    if (this.roles.length === 0) {
                        data.forEach(item => {
                            this.roles.push(item);
                        });
                    }

                    return this.roles;
                })
            );
    }

    update(role: Role): Observable<Role> {
        let i;

        this.roles.forEach((item, index) => {
            if (role.id === item.id) {
                i = index;
            }
        });

        if (i) {
            this.roles[i] = role;
        }

        return new Observable<Role>(observer => {
            observer.next(role);
        });
    }
}
