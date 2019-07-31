import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Here we validate if the user is loggedIn, in case it's true 
    // we return true and let the user continue with the navigation,
    // otherwise we return a urlTree, which will redirect to the 
    // specified route
    return this.store.select('auth').pipe( 
      take(1), 
      map(authState => authState.user),
      map(user => {
        const isAuth =  !!user;
        if(isAuth) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth']);
        }
      })
    );
  }
}
