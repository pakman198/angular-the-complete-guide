import { Injectable, ɵɵcontainerRefreshEnd } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment'
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signupUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  private tokenExpirationTimer;

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    console.log('signup')
    return this.http.post<AuthResponseData>(this.signupUrl + environment.firebaseAPIKey, {
      email,
      password,
      returnSecureToken: true 
    }).pipe( 
      catchError( this.handleError ),
      tap( this.authUser.bind(this) )
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.loginUrl + environment.firebaseAPIKey, {
      email,
      password,
      returnSecureToken: true 
    }).pipe( 
      catchError( this.handleError ),
      // The context is lost, in the authUser method, so I use bind
      // another option is to create anonymous function and change authUser
      // to receive other parameters this.authUser(...params)
      tap( this.authUser.bind(this) ),
    );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('MyApp_userData');

    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = null;
  }

  private handleError(errorResponse: HttpErrorResponse) {
    const { message } = errorResponse.error.error;
    let errorMessage = 'An error occurred';

    if(!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
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

    return throwError(errorMessage);
  }

  private authUser(responseData: AuthResponseData) {
    console.log('authUser')
    const { email, localId, idToken, expiresIn} = responseData;
    const time = new Date().getTime() + +expiresIn * 1000;
    const expirationDate = new Date(time);
    const newUser = new User(email, localId, idToken, expirationDate);

    this.autoLogout(+expiresIn * 1000)
    localStorage.setItem('MyApp_userData', JSON.stringify(newUser));
    console.log(this)

    this.user.next(newUser);
  }

  autoLogin() {
    const userData: UserInterface = JSON.parse(localStorage.getItem('MyApp_userData'));

    if ( !userData ) return;

    const { email, id, _token, _tokenExpirationDate } = userData;
    const loadedUser = new User(email, id, _token, new Date(_tokenExpirationDate));

    if(loadedUser.token) {
      this.user.next(loadedUser);
      const duration = new Date(_tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(duration);
    }
  }

  // This method revokes user access once the token duration has expired
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration)
  }
}
