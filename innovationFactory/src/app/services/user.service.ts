import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../interfaces/user';
import { IUserRegister } from '../interfaces/user-register';

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

  register(user: IUserRegister) : Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<IUserRegister>(url, user);
  }
}
