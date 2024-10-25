import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;
    message: string = '';
    isSuccess: boolean = false;
    isLoading: boolean = false;

    constructor(private fb: FormBuilder) {
        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]],
        }, { validators: this.passwordMatchValidator }); // Add custom validator
    }

    ngOnInit() {
        // Any initialization logic if needed
    }

    get email() {
        return this.forgotPasswordForm.get('email');
    }

    get newPassword() {
        return this.forgotPasswordForm.get('newPassword');
    }

    get confirmPassword() {
        return this.forgotPasswordForm.get('confirmPassword');
    }

    passwordMatchValidator(form: FormGroup) {
        return form.get('newPassword')?.value === form.get('confirmPassword')?.value
            ? null : { mismatch: true };
    }

    onSubmit() {
        if (this.forgotPasswordForm.valid) {
            const { email, newPassword } = this.forgotPasswordForm.value;

            this.isLoading = true;
            // Call your service to handle password reset logic
            // Example: this.authService.resetPassword(email, newPassword).subscribe(...)

            this.message = 'If this email exists, a reset link has been sent.';
            this.isSuccess = true; // Set to true if the operation was successful
            this.isLoading = false;
        } else {
            this.message = 'Please correct the errors above.';
            this.isSuccess = false;
        }
    }
}
