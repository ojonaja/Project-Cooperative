import { Component } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  depositAmount: number = 0;
  depositHistory: { date: string; amount: number }[] = [];
  message: string | null = null;

  onDeposit() {
    if (this.depositAmount > 0) {
      const deposit = {
        date: new Date().toLocaleString(),
        amount: this.depositAmount
      };
      this.depositHistory.push(deposit);
      this.message = `ฝากเงินจำนวน ${this.depositAmount} บาท สำเร็จ!`;
      this.depositAmount = 0; // ล้างฟิลด์หลังการฝาก
    } else {
      this.message = 'กรุณากรอกจำนวนเงินที่ถูกต้อง';
    }
  }
}
