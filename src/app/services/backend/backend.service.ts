import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData } from '../../models/form-data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  sendPing(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/ping')
  }

  sendContactDeveloper(data: FormData): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/contact/', data);
  }
}
