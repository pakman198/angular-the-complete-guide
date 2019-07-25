import { Injectable, ɵɵcontainerRefreshEnd } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { exists } from 'fs';

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

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    console.log('signup')
    return this.http.post<AuthResponseData>(this.signupUrl + this.key, {
      email,
      password,
      returnSecureToken: true 
    }).pipe( catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signupUrl + this.key, {
      email,
      password,
      returnSecureToken: true 
    }).pipe( catchError(this.handleError) )
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
}
