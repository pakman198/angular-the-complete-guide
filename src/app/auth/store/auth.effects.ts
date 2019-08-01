import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment'
import * as AuthActions from './auth.actions';
import { User } from '../user.model';
import { AuthService } from '../auth.service';


interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

interface UserInterface {
    email: string,
    id: string,
    _token: string,
    _tokenExpirationDate: Date
}

const LOGIN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const SIGNUP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

const handleAuthentication = (resData: AuthResponseData) => {
    const { email, localId, idToken, expiresIn} = resData;
    const time = new Date().getTime() + +expiresIn * 1000;
    const expirationDate = new Date(time);
    const newUser = new User(email, localId, idToken, expirationDate);

    localStorage.setItem('MyApp_userData', JSON.stringify(newUser));

    return new AuthActions.AuthenticateSuccess(newUser);
}

const handleError = (errorResponse: HttpErrorResponse) => {
    const { message } = errorResponse.error.error;
    let errorMessage = 'An error occurred';

    if(!errorResponse.error || !errorResponse.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage) );
    }

    switch(message) {
    case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists.';
        break;

    case 'EMAIL_NOT_FOUND':
        errorMessage = "This email doesn't exist."
        break;

    case 'INVALID_PASSWORD':
        errorMessage = 'The password is not valid.'
        break;

    default: 
        errorMessage = 'An error occurred';
        break;
    }
    return of( new AuthActions.AuthenticateFail(errorMessage) );
}

@Injectable()
export class AuthEffects {

    @Effect()
    authSignup = this.actions$.pipe(
        ofType(AuthActions.SIGNUP_START),
        switchMap( (authData: AuthActions.SignupStart) => {
            const { email, password } = authData.payload;
            return this.http.post<AuthResponseData>(SIGNUP_URL + environment.firebaseAPIKey, {
                email,
                password,
                returnSecureToken: true 
            }).pipe(
                tap( (resData: AuthResponseData) => {
                    const { expiresIn } = resData;
                    this.authService.setLogoutTimer(+expiresIn * 1000);
                }),
                map( resData => handleAuthentication(resData) ),
                catchError( errorResponse =>  handleError(errorResponse) )
            )
        })
    );

    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap( (authData: AuthActions.LoginStart) => {
            const { email, password } = authData.payload;
            return this.http.post<AuthResponseData>(LOGIN_URL + environment.firebaseAPIKey, {
                email,
                password,
                returnSecureToken: true 
            }).pipe( 
                tap( (resData: AuthResponseData) => {
                    const { expiresIn } = resData;
                    this.authService.setLogoutTimer(+expiresIn);
                }),
                map( resData => handleAuthentication(resData) ),
                catchError( errorResponse =>  handleError(errorResponse) )
            );
        })
    );

    @Effect()
    authAutoLogin = this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGIN),
        map(() => {
            const userData: UserInterface = JSON.parse(localStorage.getItem('MyApp_userData'));

            if ( !userData ) return { type: 'DUMMY'};

            const { email, id, _token, _tokenExpirationDate } = userData;
            const loadedUser = new User(email, id, _token, new Date(_tokenExpirationDate));

            if(loadedUser.token) {
                const duration = new Date(_tokenExpirationDate).getTime() - new Date().getTime();
                this.authService.setLogoutTimer(duration);
                
                return new AuthActions.AuthenticateSuccess(loadedUser);
            }

            return { type: 'DUMMY'};
        })
    )

    @Effect({ dispatch: false })
    authLogout = this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGOUT),
        tap(() => {
            localStorage.removeItem('MyApp_userData');
            this.authService.clearLogoutTimer();
            this.router.navigate(['/auth']);
        })
    );

    @Effect({ dispatch: false})
    authRedirect = this.actions$.pipe( 
        ofType(AuthActions.AUTHENTICATE_SUCCESS),
        tap(() => this.router.navigate(['/']))
    )

    constructor(private actions$: Actions, 
        private http: HttpClient, 
        private router: Router,
        private authService: AuthService){}
}