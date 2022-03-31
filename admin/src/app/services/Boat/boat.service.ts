import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  readonly url = 'http://localhost:1337/api/boats';
  apiKey: string | undefined;

  constructor(private httpClient: HttpClient) { 
    this.apiKey = environment.apiKey;
  }

  getBoats(): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
    return this.httpClient.get(`${this.url}`, { headers: opts });
  }
}
