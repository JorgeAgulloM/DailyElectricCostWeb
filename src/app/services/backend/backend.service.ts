import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData } from '../../models/form-data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  localHost = 'http://127.0.0.1:8000'
  serverHost = 'https://daily-electric-cost-bakend-8028a574d40e.herokuapp.com'

  sendPing(): Observable<any> {
    return this.http.get<any>(`${this.serverHost}/ping`)
  }

  sendContactDeveloper(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.serverHost}/contact/`, data);
  }

  sendSetSubscrition(email: string): Observable<any> {
    return this.http.post<any>(`${this.serverHost}/public/subscribers/`, {'email': email});
  }
}
