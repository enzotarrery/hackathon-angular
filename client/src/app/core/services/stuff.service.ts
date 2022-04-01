import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StuffService {
  constructor(
    private tokenStorageService: TokenStorageService,
    private httpClient: HttpClient
  ) {}

  getStuffs(): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
    };
    return this.httpClient.get(
      `http://localhost:1337/api/stuffs?populate=%2A`,
      { headers: opts }
    );
  }

  getStuff(id: string | null): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
    };
    return this.httpClient.get(`http://localhost:1337/api/stuffs/` + id, {
      headers: opts,
    });
  }

  searchStuff(param: string): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
    };
    return this.httpClient.get(
      'http://localhost:1337/api/stuffs?filters[label][$contains]=' + param,
      { headers: opts }
    );
  }
}
