import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-1',
  templateUrl: './sign-up-1.component.html',
  styleUrl: './sign-up-1.component.scss'
})
export class SignUp1Component {
  signUpForm: FormGroup; 

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      username: ['', Validators.required], //will need validation to ensure username doesn't already exist in DB
      password: ['', Validators.required, Validators.minLength(8)]
    })
  }

  onSubmit() {
    /*
    if (this.signUpForm.valid) {
      this.router.navigate(['/sign-up/2']);
    }

    */
    this.router.navigate(['/sign-up/2']);
  }
}
