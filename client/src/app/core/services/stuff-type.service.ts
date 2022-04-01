import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STRAPI_API } from '../globals';
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
    return this.httpClient.get(STRAPI_API + `stuff-types?populate=%2A`, { headers: opts });
  }
}
