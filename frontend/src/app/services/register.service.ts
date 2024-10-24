// src/app/services/register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService { // Updated service name
  private apiUrl = 'http://your-api-url.com/api'; // URL ของ API ของคุณ

  constructor(private http: HttpClient) {}

  registerMember(memberData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register-member`, memberData);
  }
}
