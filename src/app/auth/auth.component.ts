import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignUp = true;
  isLoading = false;
  error = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isSignUp = !this.isSignUp;
  }

  onSubmit(form: NgForm) {
    if(form.invalid) return;

    this.isLoading = true;
    const { email, password } = form.value;

    if(this.isSignUp) {
      this.authService.signup(email, password).subscribe(response => {
        console.log({response});
        this.isLoading = false;
      }, errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      });

    } else {

    }
    
    form.reset();
  }

}
