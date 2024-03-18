import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData } from '../../models/form-data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  localHost = 'http://127.0.0.1:8000';
  heroku = 'https://daily-electric-cost-bakend-8028a574d40e.herokuapp.com';
  serverHost = this.localHost;

  sendPing(): Observable<any> {
    return this.http.get<any>(`${this.serverHost}/ping`);
  }

  sendContactDeveloper(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.serverHost}/contact/`, data);
  }

  sendSetSubscrition(email: string): Observable<any> {
    return this.http.post<any>(`${this.serverHost}/subscribers/`, {'email': email});
  }

  //En backend el método es un get para permitir la funcionalidad desde el email, ya se puede cambiar
  sendActivateSubscriber(code: string): Observable<any> {
    return this.http.get<any>(`${this.serverHost}/public/subscribers/activate/${code}`);
  }

  sendCancelSubscriber(code: string): Observable<any> {
    return this.http.get<any>(`${this.serverHost}/public/subscribers/cancel/${code}`);
  }

  getEmailSubscriptor(code: string): Observable<any> {
    return this.http.get<any>(`${this.serverHost}/public/subscribers/email/${code}`)
  }

}
