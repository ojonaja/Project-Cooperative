import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  openAccountForm!: FormGroup;
  successMessage: string | null = null; // เพิ่มตัวแปรสำหรับข้อความสำเร็จ

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.openAccountForm = this.fb.group({
      fullName: ['', Validators.required],
      birthDate: ['', Validators.required],
      idCardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      initialDeposit: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.openAccountForm.valid) {
      console.log('Form Submitted', this.openAccountForm.value);
      this.successMessage = 'เปิดบัญชีออมทรัพย์สำเร็จ!'; // แสดงข้อความสำเร็จ
      // ที่นี่สามารถส่งข้อมูลไปยังเซิร์ฟเวอร์ได้
      this.openAccountForm.reset(); // ล้างฟอร์มหลังจากส่ง
    }
  }
}
