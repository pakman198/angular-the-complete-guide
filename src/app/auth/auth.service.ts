import { Injectable, ɵɵcontainerRefreshEnd } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  key = "AIzaSyCGqVmZED8yGaKnyuxuSQW0X40twpVW2RA";
  baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    console.log('signup')
    return this.http.post<AuthResponseData>(this.baseUrl + this.key, {
      email,
      password,
      returnSecureToken: true 
    });
  }
}
