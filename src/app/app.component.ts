import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState>,
    @Inject(PLATFORM_ID) private platformID) {}

  ngOnInit() {
    if( isPlatformBrowser(this.platformID) ) {
      this.store.dispatch(new AuthActions.AutoLogin());
    }
  }
}
