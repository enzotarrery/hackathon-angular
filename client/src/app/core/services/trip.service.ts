import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STRAPI_API } from '../globals';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(
    private tokenStorageService: TokenStorageService,
    private httpClient: HttpClient
  ) {}

  getTrip(id: string | null): Observable<any> {
    let options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(
      'http://localhost:1337/api/trips/' + id,
      options
    );
  }

  getTrips(): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
    };
    return this.httpClient.get(STRAPI_API + `trips?populate=%2A`, { headers: opts });
  }
}
