import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // นำเข้า AuthService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: string | null = null; // ประกาศตัวแปรเพื่อเก็บบทบาทของผู้ใช้
  editMode: boolean = false; // ประกาศตัวแปรเพื่อควบคุมโหมดแก้ไข

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // ดึงบทบาทของผู้ใช้จาก localStorage หรือวิธีอื่น
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userRole = user.role || ''; // สมมุติว่าบทบาทของผู้ใช้ถูกเก็บในอ็อบเจ็กต์ผู้ใช้
  }

  toggleEditMode() {
    this.editMode = !this.editMode; // สลับสถานะของโหมดแก้ไข
  }

  saveChanges() {
    // Logic to save the changes made by the admin
    console.log('Changes saved!'); // คุณสามารถแทนที่บรรทัดนี้ด้วยโลจิกการบันทึกจริง
    this.toggleEditMode(); // ออกจากโหมดแก้ไขหลังจากบันทึก
  }
}
