import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from '@Core/models';

export const ADD_USER = '[User] Add User';
export const ADD_USER_SUCCESS = '[User] Add User Success';
export const LOAD_USER = '[User] Load User';
export const LOAD_USER_SUCCESS = '[User] Load User Success';
export const LOAD_USERS = '[User] Load Users';
export const UPSERT_USER = '[User] Upsert User';
export const ADD_USERS = '[User] Add Users';
export const UPSERT_USERS = '[User] Upsert Users';
export const UPDATE_USER = '[User] Update User';
export const UPDATE_USERS = '[User] Update Users';
export const DELETE_USER = '[User] Delete User';
export const DELETE_USERS = '[User] Delete Users';
export const CLEAR_USERS = '[User] Clear Users';

export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload: { user: User }) { }
}

export class AddUserSuccess implements Action {
    readonly type = ADD_USER_SUCCESS;

    constructor(public payload: { user: User }) { }
}

export class LoadUser implements Action {
    readonly type = LOAD_USER;

    constructor(public payload: { user: User }) { }
}

export class LoadUserSuccess implements Action {
    readonly type = LOAD_USER_SUCCESS;

    constructor(public payload: { user: User }) { }
}
export class LoadUsers implements Action {
    readonly type = LOAD_USERS;

    constructor(public payload: { users: User[] }) { }
}

export class UpsertUser implements Action {
    readonly type = UPSERT_USER;

    constructor(public payload: { user: User }) { }
}

export class AddUsers implements Action {
    readonly type = ADD_USERS;

    constructor(public payload: { users: User[] }) { }
}

export class UpsertUsers implements Action {
    readonly type = UPSERT_USERS;

    constructor(public payload: { users: User[] }) { }
}

export class UpdateUser implements Action {
    readonly type = UPDATE_USER;

    constructor(public payload: { user: Update<User> }) { }
}

export class UpdateUsers implements Action {
    readonly type = UPDATE_USERS;

    constructor(public payload: { users: Update<User>[] }) { }
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;

    constructor(public payload: { id: string }) { }
}

export class DeleteUsers implements Action {
    readonly type = DELETE_USERS;

    constructor(public payload: { ids: string[] }) { }
}

export class ClearUsers implements Action {
    readonly type = CLEAR_USERS;
}

export type ActionTypes =
    LoadUser
    | LoadUserSuccess
    | LoadUsers
    | AddUser
    | AddUserSuccess
    | UpsertUser
    | AddUsers
    | UpsertUsers
    | UpdateUser
    | UpdateUsers
    | DeleteUser
    | DeleteUsers
    | ClearUsers;
