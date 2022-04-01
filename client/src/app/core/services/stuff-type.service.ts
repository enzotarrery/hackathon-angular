import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StuffTypeService {
  constructor(
    private tokenStorageService: TokenStorageService,
    private httpClient: HttpClient
  ) {}

  getStuffTypes(): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
    };
    return this.httpClient.get(
      `http://localhost:1337/api/stuff-types?populate=%2A`,
      { headers: opts }
    );
  }

  searchStuff(param: string): Observable<any> {
    return this.httpClient.get(
      'http://localhost:1337/api/stuff-types?filters[name][$contains]=' + param
    );
  }
}
