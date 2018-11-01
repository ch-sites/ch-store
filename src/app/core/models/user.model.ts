import { Role } from "./role.model";

export interface User {
	displayName: string;
	email: string;
	uid: string;
	firstName?: string;
	lastName?: string;
	roles?: Array<Role>;
	photoURL?: string;
}
