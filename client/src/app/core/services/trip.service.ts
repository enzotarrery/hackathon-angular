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
        'Authorization' : 'Bearer 024312c67f888500ed4a66607473875e82cbe53e8ebb860e222d69f8bdfee834beff8db6347dd5e3aad7ff46e69d6e09c3181becfa91f20ea8288e2089011ae18f5ee70a86301972613f69196fbd80a6c42f0a374920f8df10cbc4eb9b7d0058dc0527e7dadc71251e150229de827fef0ff1630d3b70ea33351cb706e5b06ae4',
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get('http://localhost:1337/api/trips/' + id, options);
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
