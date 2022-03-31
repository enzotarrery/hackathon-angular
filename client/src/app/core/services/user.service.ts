import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STRAPI_API } from '../globals';
import { User } from '../models/user';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  connect(data: { username: string; password: string }): Observable<any> {
    return this.httpClient.post(STRAPI_API + 'auth/local', {
      identifier: data.username,
      password: data.password,
    });
  }

  disconnect(): void {
    this.tokenStorageService.disconnect();

    localStorage.removeItem('ferrysail-user');
  }

  setUser(user: User): void {
    localStorage.setItem('ferrysail-user', JSON.stringify(user));
  }

  getUser(): User | null {
    const user = localStorage.getItem('ferrysail-user');

    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
}
