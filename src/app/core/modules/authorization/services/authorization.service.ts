import { Injectable } from '@angular/core';

import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { Observable } from 'rxjs';

import { Role } from '@Core/models';

@Injectable()
export class AuthorizationService {
    constructor(
        private permissionsService: NgxPermissionsService,
        private rolesService: NgxRolesService
    ) { }

    public addPermissionsToRole(role: Role, permissions: string[]) {
        this.rolesService.addRole(
            role.name, permissions
        );
    }

    public addPermissionById(action: string, resourceId: string, userId: string): void {
        this.permissionsService.addPermission(
            this.generatePermission(action, resourceId, userId)
        );
    }

    public generatePermissionsToRole(role: string, actions: Array<string>, resourceId: string) {
        this.rolesService.addRole(
            role, [
                Observable.create(actions).map(action => {
                    this.generatePermission(action, resourceId);
                })
            ]
        );
    }

    public generatePermission(action: string, resourceId: string, userId?: string): string {
        let permission = action + '-' + resourceId;

        if (userId) {
            permission = userId + '-' + permission;
        }

        return permission;
    }

    public removeAll(): void {
        this.rolesService.flushRoles();
    }
}
