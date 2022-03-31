import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StuffTypeService {

  constructor(private httpClient: HttpClient) { }

  searchStuff(param: string): Observable<any> {
    return this.httpClient.get('http://localhost:1337/api/stuff-types?filters[name][$contains]=' + param);
  }
}
