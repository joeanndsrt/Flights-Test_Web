import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://nawrasmansour.online/api';

  // getTicket(): Observable<any> {
  //   const url = `${this.apiUrl}/flights`;
  //   return this.http.get<any>(url);
  // }


  
}
