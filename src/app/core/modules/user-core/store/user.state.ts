import { EntityState } from '@ngrx/entity';

import { User } from '@Core/models';

export interface UserState extends EntityState<User> {
    loading: boolean;
}
