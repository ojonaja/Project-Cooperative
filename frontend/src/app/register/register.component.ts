// src/app/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service'; // Updated service import
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private registerService: RegisterService, // Updated service name
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      idCard: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      const memberData = this.registerForm.value;
      this.registerService.registerMember(memberData).subscribe(
        response => {
          this.router.navigate(['/success']);
        },
        error => {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      );
    }
  }
}
