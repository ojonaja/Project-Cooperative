import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-complaint',
    templateUrl: './complaint.component.html',
    styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
    complaintForm: FormGroup;
    message: string = '';
    isSuccess: boolean = false;
    isLoading: boolean = false;

    constructor(private fb: FormBuilder) {
        this.complaintForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            complaint: ['', Validators.required]
        });
    }

    ngOnInit() {
        // Any initialization logic if needed
    }

    get name() {
        return this.complaintForm.get('name');
    }

    get email() {
        return this.complaintForm.get('email');
    }

    get complaint() {
        return this.complaintForm.get('complaint');
    }

    onSubmit() {
        if (this.complaintForm.valid) {
            this.isLoading = true;
            const complaintData = this.complaintForm.value;

            // Call a service to send the complaint data
            // Example: this.complaintService.submitComplaint(complaintData).subscribe(...)

            this.message = 'Your complaint has been submitted successfully!';
            this.isSuccess = true;
            this.isLoading = false;

            // Reset form after submission
            this.complaintForm.reset();
        } else {
            this.message = 'Please correct the errors above.';
            this.isSuccess = false;
        }
    }
}
