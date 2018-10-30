import { UserReducer, initialState } from './user.reducer';

describe('User Reducer', () => {
    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;

            const result = UserReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
