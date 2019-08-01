import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  isSignUp = true;
  isLoading = false;
  error = null;
  private closeSubscription: Subscription;
  private storeSubscription: Subscription;

  constructor(
  private componentFactoryResolver: ComponentFactoryResolver,
  private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.storeSubscription = this.store.select('auth').subscribe(authState => {
      const { loading, authError } = authState;
      this.isLoading = loading;
      this.error = authError;
      
      if(this.error) {
        this.showErrorAlert(this.error)
      }
    });
  }

  ngOnDestroy() {
    if(this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }

    if(this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  onSwitchMode() {
    this.isSignUp = !this.isSignUp;
  }

  onSubmit(form: NgForm) {
    if(form.invalid) return;

    this.isLoading = true;
    const { email, password } = form.value;

    if(this.isSignUp) {
      this.store.dispatch( new AuthActions.SignupStart({ email, password }));
    } else {
      this.store.dispatch( new AuthActions.LoginStart({ email, password }));
    }
    
    form.reset();
  }

  onCloseAlert() {
    this.store.dispatch( new AuthActions.ClearError() );
  }

  private showErrorAlert(message: string) {
    const alertFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    // We bind properties and subscribe to events manually
    const componentRef = hostViewContainerRef.createComponent(alertFactory);
    componentRef.instance.message = message;
    this.closeSubscription = componentRef.instance.close.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
