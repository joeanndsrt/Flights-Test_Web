import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../interfaces/user';
import { IUserRegister } from '../interfaces/user-register';
import { IUserVerify } from '../interfaces/user-verify';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://nawrasmansour.online/api';

  constructor(private http: HttpClient) { }

  login(user: IUser): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<IUser>(url, user);
  }

  logout(token: string): Observable<any> {
    const url = `${this.apiUrl}/logout`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(url, null, { headers });
  }
  

//   logout(token: string): Observable<any> {
//     const url = `${this.apiUrl}/logout`;
//     const headers = { Authorization: `Bearer ${token}` };
//     return this.http.post<any>(url, null, { headers });
// }

  register(user: IUserRegister) : Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<IUserRegister>(url, user);
  }

  verify(user: IUserVerify) : Observable<any> {
    const url = `${this.apiUrl}/loginOtp`;
    return this.http.post<IUserRegister>(url, user);
  }

}