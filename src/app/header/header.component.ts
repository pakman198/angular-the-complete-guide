import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  isAuthUser = false;

  constructor(private dsService: DataStorageService, private authService: AuthService, private store: Store<fromApp.AppState>) { }

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
    this.dsService.storeRecipes();
  }

  fetchRecipes() {
    this.dsService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
