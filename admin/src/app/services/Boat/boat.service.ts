import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boats } from 'src/app/Model/Boats';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  readonly url = '/api/boats';
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
  addBoat(boat: Boats): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      'Access-Control-Allow-Origin':'*',
    };
    return this.httpClient.post(`${this.url}`, 
    {
      data: boat
    }, 
    { headers: opts,
      withCredentials: true
    });
  }

}
