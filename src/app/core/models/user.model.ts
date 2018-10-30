export interface User {
	displayName: string;
	email: string;
	uid: string;
	firstName?: string;
	lastName?: string;
	roles?: Array<string>;
	photoURL?: string;
}
