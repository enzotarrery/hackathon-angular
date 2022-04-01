import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trips } from 'src/app/Model/trips';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  readonly url = '/api/trips';
  apiKey: string | undefined;

  constructor(private httpClient: HttpClient) { 
    this.apiKey = environment.apiKey;
  }

  getTrips(): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
    return this.httpClient.get(`${this.url}?populate=%2A`, { headers: opts });
  }
  addTrip(trip: Trips): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      'Access-Control-Allow-Origin':'*',
    };
    return this.httpClient.post(`${this.url}`, 
    {
      data: trip
    }, 
    { headers: opts,
      withCredentials: true
    });
  }
  getTripById(id: string) {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
    return this.httpClient.get(`${this.url}/${id}?populate=%2A`, { headers: opts })
  }
}
