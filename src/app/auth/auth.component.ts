import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignUp = true;
  isLoading = false;
  error = null;

  constructor(private authService: AuthService, private router: Router) { }

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
      this.isLoading = false;
    });
    
    form.reset();
  }

}
