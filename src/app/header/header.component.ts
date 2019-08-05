import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipesActions from '../recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  isAuthUser = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authSubscription = this.store.select('auth')
    .pipe( map(authState => authState.user))
    .subscribe(user => {
      this.isAuthUser = !!user;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  saveRecipes() {
    this.store.dispatch( new RecipesActions.StoreRecipes());
  }

  fetchRecipes() {
    this.store.dispatch(new RecipesActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch( new AuthActions.Logout() );
  }
}
