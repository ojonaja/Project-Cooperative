import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://your-api-url.com/login'; // Update URL to match your API

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}/register`, { username, password });
  }
}
