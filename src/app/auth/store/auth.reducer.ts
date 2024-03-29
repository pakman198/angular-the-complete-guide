import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
    user: User,
    authError: string,
    loading: boolean,
    redirect: boolean
}

const initialState = {
    user: null,
    authError: null,
    loading: false,
    redirect: false
}

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
    switch(action.type) {
        case AuthActions.AUTHENTICATE_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                authError: null,
                loading: false,
                redirect: action.payload.redirect
            }

        case AuthActions.LOGOUT:
            return {
                ...state,
                user: null
            }

        case AuthActions.LOGIN_START:
        case AuthActions.SIGNUP_START:
            return {
                ...state,
                authError: null,
                loading: true
            }
            
        case AuthActions.AUTHENTICATE_FAIL:
            return {
                ...state,
                user: null,
                authError: action.payload,
                loading: false
            }

        case AuthActions.CLEAR_ERROR:
            return {
                ...state,
                authError: null
            }
                
        default:
            return state;
    }
}