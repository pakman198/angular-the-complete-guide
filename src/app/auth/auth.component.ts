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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isSignUp = !this.isSignUp;
  }

  onSubmit(form: NgForm) {
    console.log({form});

    if(form.invalid) return;

    const { email, password } = form.value;

    if(this.isSignUp) {
      this.authService.signup(email, password).subscribe(response => {
        console.log({response});
      }, error => {
        console.log({error})
      });

    } else {
      
    }
    
    form.reset();
  }

}
