import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Here the idea is to intercept the request and
    // get the userToken from the user service.
    // Finally the request goes through but now with the user token
    return this.authService.user.pipe(
      // the take operator lets me take one observer
      // and immediately unsubscribe from the observable
      // exhaustMap creates a new observable
      take(1),
      exhaustMap(user => {
        // when we login/sign up, the user is a null, we add this validation
        //  to avoid a problem since there will be no token to pass as request 
        // parameter
        if(!user) return next.handle(req);

        const modifiedRequest = req.clone({ 
          params: new HttpParams().set('auth', user.token) 
        });

        return next.handle(modifiedRequest);
      })
    );
  }
}