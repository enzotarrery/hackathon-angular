import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STRAPI_API } from '../globals';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BoatService {
  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getBoat(id: string | null): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
    };
    return this.httpClient.get(STRAPI_API + `boats/` + id, { headers: opts });
  }
}
