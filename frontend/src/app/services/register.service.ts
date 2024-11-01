import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/api/register'; // เปลี่ยน URL ให้ตรงกับ API ของคุณ

  constructor(private http: HttpClient) { }

  registerMember(memberData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, memberData);
  }
}
