import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserGeolocation = createSelector([selectUser], user => user.userGeolocation);
