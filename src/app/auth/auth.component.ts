import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';

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

  constructor(private authService: AuthService, 
    private router: Router, 
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isSignUp = !this.isSignUp;
  }

  onSubmit(form: NgForm) {
    if(form.invalid) return;

    this.isLoading = true;
    const { email, password } = form.value;
    let authObservable: Observable<AuthResponseData>;

    if(this.isSignUp) {
      authObservable = this.authService.signup(email, password)

    } else {
      authObservable = this.authService.login(email, password);
    }

    authObservable.subscribe(response => {
      console.log({response});
      this.isLoading = false;
      this.router.navigate(['/recipes'])
    }, errorMessage => {
      this.error = errorMessage;
      this.showErrorAlert(errorMessage)
      this.isLoading = false;
    });
    
    form.reset();
  }

  onCloseAlert() {
    this.error = null;
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
