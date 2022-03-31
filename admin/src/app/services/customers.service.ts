import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  readonly url = 'http://api.evapmarket.local/api/admin/customers';
  constructor(private httpClient: HttpClient) { }

  getCustomers(pageNumber : number = 1): Observable<any> {
    return this.httpClient.get(`${this.url}?page=${pageNumber}`);
  }
}
