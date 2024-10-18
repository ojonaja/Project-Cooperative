import { Component } from '@angular/core';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  principal: number = 0; // เงินต้น
  rate: number = 0; // อัตราดอกเบี้ย
  time: number = 0; // ระยะเวลา
  interest: number | null = null; // ดอกเบี้ยที่คำนวณได้

  onCalculate() {
    if (this.principal > 0 && this.rate > 0 && this.time > 0) {
      // สูตรคำนวณดอกเบี้ย
      this.interest = (this.principal * this.rate * this.time) / 100;
    } else {
      this.interest = null; // ถ้าข้อมูลไม่ถูกต้อง
    }
  }
}
