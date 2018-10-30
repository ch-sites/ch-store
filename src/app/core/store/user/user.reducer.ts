import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '@Core/models';
import * as userActions from '@Core/store/user/user.actions';
import { UserState } from './user.state';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>(
    {
    selectId: (model: User) => model.uid,
}
);

export const initialState: UserState = adapter.getInitialState({
    loading: false
});

export function UserReducer(
    state = initialState,
    action: userActions.ActionTypes
): UserState {
    switch (action.type) {
        case userActions.ADD_USER_SUCCESS: {
            return {
                ...adapter.addOne(action.payload.user, state),
                loading: false
            };
        }

        case userActions.LOAD_USER: {
            return {
                ...state,
                loading: true
            };
        }

        case userActions.LOAD_USER_SUCCESS: {
            return {
                ...adapter.addOne(action.payload.user, state),
                loading: false
            };
        }

        case userActions.UPSERT_USER: {
            return adapter.upsertOne(action.payload.user, state);
        }

        case userActions.ADD_USERS: {
            return adapter.addMany(action.payload.users, state);
        }

        case userActions.UPSERT_USERS: {
            return adapter.upsertMany(action.payload.users, state);
        }

        case userActions.UPDATE_USER: {
            return adapter.updateOne(action.payload.user, state);
        }

        case userActions.UPDATE_USERS: {
            return adapter.updateMany(action.payload.users, state);
        }

        case userActions.DELETE_USER: {
            return adapter.removeOne(action.payload.id, state);
        }

        case userActions.DELETE_USERS: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case userActions.LOAD_USERS: {
            return adapter.addAll(action.payload.users, state);
        }

        case userActions.CLEAR_USERS: {
            return adapter.removeAll(state);
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
