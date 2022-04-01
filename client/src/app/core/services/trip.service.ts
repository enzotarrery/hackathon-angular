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
      'Authorization': `Bearer eb6bc3bfea7804faa5640c491ebbdc6c43fe2d6647aeac94f37315a27162fd547097243b4064fd1546cfeae8cb67a2ad19492a18341368cb0a3056021e33ffaede290c6d5e9f4c8e0ddfcb54e6e78dc742d3275e7dea5dc6ce8d9970b732a41bddce94eb5d2877fe52571f681cdff634bdcb32a1542f30b52112734a84df42a5`,
    };
    return this.httpClient.get(`http://localhost:1337/api/trips?populate=%2A`, { headers: opts });
  }
  
  constructor(private httpClient: HttpClient) {}

}
