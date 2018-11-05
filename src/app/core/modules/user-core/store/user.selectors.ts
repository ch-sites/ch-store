import { UserState } from './user.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from '@Core/modules/user-core/store/user.reducer';

export const selectUserState =
    createFeatureSelector<UserState>('user');

export const getError =
    (state: UserState) => state.error;

export const getLoadingIndicator =
    (state: UserState) => state.loading;

export const getSelectedProductBaseID =
    (state: UserState) => state.selectedUserID;

export const selectUserID = createSelector(
    selectUserState, getSelectedProductBaseID);

export const selectUserEntities = createSelector(
    selectUserState, fromUser.selectEntities);

export const selectAllUser = createSelector(
    selectUserState, fromUser.selectAll);

export const selectProductBase = createSelector(
    selectUserEntities,
    selectUserID,
    (userEntities, userID) => userEntities[userID]
);
