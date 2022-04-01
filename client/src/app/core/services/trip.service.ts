import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  getTrip(id: string | null): Observable<any> {

    let options = {
      headers : new HttpHeaders({
        'Authorization' : 'Bearer f71cac6382eef5e42dccb5319d24ba1fff97e8bd447556dcff1bf25d55e634675231238fd617d1bf77b85a782352d89f37af596d45758f2c6d6c62f861dd614c6598ef51a1faac7826dd9c8c3c5593efbef2d5fd96154570279cfc5a24740b908b1b2c69fad0547b2eac85ea37ef65e987392780b94c76c12bfded0cbb8fcc8a',
        'Content-Type': 'application/json'
      })
    }
    const url = `http://localhost:1337/api/trips/${id}?populate=%2A`
    return this.httpClient.get(url, options);
  }
  
  getTrips(): Observable<any> {
    const opts = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer f71cac6382eef5e42dccb5319d24ba1fff97e8bd447556dcff1bf25d55e634675231238fd617d1bf77b85a782352d89f37af596d45758f2c6d6c62f861dd614c6598ef51a1faac7826dd9c8c3c5593efbef2d5fd96154570279cfc5a24740b908b1b2c69fad0547b2eac85ea37ef65e987392780b94c76c12bfded0cbb8fcc8a`,
    };
    return this.httpClient.get(`http://localhost:1337/api/trips?populate=%2A`, { headers: opts });
  }
  
  constructor(private httpClient: HttpClient) {}

}
