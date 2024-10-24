import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Ensure this path is correct
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  showRegisterForm: boolean = false;
  showForgotPassword: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (response: any) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/dashboard']); // Change this to your home route
        },
        (error: HttpErrorResponse) => {
          this.errorMessage = 'Login failed. Please check your username and password.';
        }
      );
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      this.authService.register(username, password).subscribe(
        (response: any) => {
          this.errorMessage = 'Registration successful!';
          this.showRegisterForm = false; // Close registration form
        },
        (error: HttpErrorResponse) => {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      );
    }
  }

  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
    this.showForgotPassword = false; // Close forgot password form
  }

  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
    this.showRegisterForm = false; // Close registration form
  }
}
