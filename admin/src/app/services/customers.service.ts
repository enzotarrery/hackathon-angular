import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  readonly url = 'http://localhost:1337/api/users';
  apiKey: string | undefined;

  constructor(private httpClient: HttpClient) { 
    this.apiKey = environment.apiKey;
  }

  getCustomers(): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
    return this.httpClient.get(`${this.url}`, { headers: opts });
  }
  getCustomerById(id: string) {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
    return this.httpClient.get(`${this.url}/${id}`, { headers: opts })
  }
}
