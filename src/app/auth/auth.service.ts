import { Injectable, ɵɵcontainerRefreshEnd } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  key = "AIzaSyCGqVmZED8yGaKnyuxuSQW0X40twpVW2RA";
  signupUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth'])
  }

  signup(email: string, password: string) {
    console.log('signup')
    return this.http.post<AuthResponseData>(this.signupUrl + this.key, {
      email,
      password,
      returnSecureToken: true 
    }).pipe( 
      catchError( this.handleError ),
      tap( this.authUser )
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.loginUrl + this.key, {
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
    const time = new Date().getTime() + +responseData.expiresIn * 1000;
    const expirationDate = new Date(time);
    const newUser = new User(responseData.email, responseData.localId, responseData.idToken, expirationDate);
    console.log(this)

    this.user.next(newUser);
  }
}
