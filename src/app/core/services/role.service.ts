import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '@Core/models/role.model';

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
        this.get(role.uid).subscribe(item => {
            const index = this.roles.indexOf(item);

            this.roles.splice(index, 1);
        });

        return new Observable<Role>(observer => {
            observer.next(role);
        });
    }

    get(uid: string): Observable<Role> {
        return new Observable<Role>(observer => {
            let role: Role;

            this.roles.forEach(item => {
                if (item.uid === uid) {
                    role = item;
                }
            });

            observer.next(role);
        });
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
            if (role.uid === item.uid) {
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
