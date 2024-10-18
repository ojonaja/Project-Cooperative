import { Component } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  withdrawAmount: number = 0;
  message: string | null = null;
depositHistory: any;

  onWithdraw() {
    if (this.withdrawAmount > 0) {
      // ตรงนี้สามารถบันทึกการถอนเงินไปยัง API หรือ Service ได้
      this.message = `ถอนเงินจำนวน ${this.withdrawAmount} บาท สำเร็จ!`;
      this.withdrawAmount = 0; // ล้างฟิลด์หลังการถอน
    } else {
      this.message = 'กรุณากรอกจำนวนเงินที่ถูกต้อง';
    }
  }
}
