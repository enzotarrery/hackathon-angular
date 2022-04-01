import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.httpClient.get(`http://localhost:1337/api/boats/` + id, {
      headers: opts,
    });
  }
}
