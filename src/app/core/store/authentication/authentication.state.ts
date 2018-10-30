import { User } from "@Core/models";

export interface AuthenticationState {
    user: User;
    loading: boolean
}
