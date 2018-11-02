import * as authenticationActions from '@Core/modules/authentication/store/authentication.actions';
import { User } from '@Core/models';
import { AuthenticationState } from '@Core/modules/authentication/store';

export type Action = authenticationActions.AuthenticationActions;

const defaultUser: User = { uid: null, displayName: 'GUEST', email: null };

/// Reducer function
export function authenticationReducer(
    state: AuthenticationState = { user: defaultUser, loading: false }, action: Action) {

    switch (action.type) {
        case authenticationActions.GET_USER:
            return { ...state, loading: true };

        case authenticationActions.AUTHENTICATED:
            return { ...state, user: action.payload, loading: false };

        case authenticationActions.NOT_AUTHENTICATED:
            return { ...state, user: defaultUser, loading: false };

        case authenticationActions.GOOGLE_LOGIN:
            return { ...state, loading: true };

        case authenticationActions.AUTH_ERROR:
            return { ...state, user: action.payload, loading: false };

        case authenticationActions.LOGOUT:
            return { ...state, loading: true };

        default: {
            return state;
        }
    }
}
