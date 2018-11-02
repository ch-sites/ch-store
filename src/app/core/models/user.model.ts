import { Role } from './role.model';

export interface User {
    displayName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    photoURL?: string;
    roles?: Array<Role>;
    uid: string;
}
