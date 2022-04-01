import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CheckpointsService {
  constructor(
    private tokenStorageService: TokenStorageService,
    private httpClient: HttpClient
  ) {}

  getCheckpoints(): Observable<any> {
    let options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(
      'http://localhost:1337/api/checkpoints/?populate=%2A',
      options
    );
  }

  getCheckpoint(id: string | null): Observable<any> {
    let options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tokenStorageService.getToken()}`,
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(
      'http://localhost:1337/api/checkpoints/' + id + '?populate=%2A',
      options
    );
  }
}
