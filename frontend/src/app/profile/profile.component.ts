import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userId: string;
  user: any;
  editUser: any;

  constructor() {
    this.userId = '0001'; // เปลี่ยนเป็นการดึงจาก API หรือ Service ในอนาคต
    this.user = {
      name: 'สมชาย',
      lastname: 'ใจดี',
      citizenId: '1234567890123',
      accountNumber: '123-456-789',
      dob: '1990-01-01',
      phone: '0812345678',
      email: 'somchai@example.com',
      username: 'somchai123',
      password: 'password123'
    };
    this.editUser = { ...this.user };
  }

  ngOnInit(): void {
    // ถ้ามีการดึงข้อมูลจาก API สามารถทำได้ที่นี่
  }

  saveChanges(): void {
    this.user = {
      ...this.editUser,
      accountNumber: this.user.accountNumber
    };
  }
}
