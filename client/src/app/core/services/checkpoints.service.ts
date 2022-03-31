import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckpointsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCheckpoints(): Observable<any> {

    let options = {
      headers : new HttpHeaders({
        'Authorization' : 'Bearer 024312c67f888500ed4a66607473875e82cbe53e8ebb860e222d69f8bdfee834beff8db6347dd5e3aad7ff46e69d6e09c3181becfa91f20ea8288e2089011ae18f5ee70a86301972613f69196fbd80a6c42f0a374920f8df10cbc4eb9b7d0058dc0527e7dadc71251e150229de827fef0ff1630d3b70ea33351cb706e5b06ae4',
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get('http://localhost:1337/api/checkpoints/?populate=%2A', options);
  }

  getCheckpoint(id: string | null): Observable<any> {

    let options = {
      headers : new HttpHeaders({
        'Authorization' : 'Bearer 024312c67f888500ed4a66607473875e82cbe53e8ebb860e222d69f8bdfee834beff8db6347dd5e3aad7ff46e69d6e09c3181becfa91f20ea8288e2089011ae18f5ee70a86301972613f69196fbd80a6c42f0a374920f8df10cbc4eb9b7d0058dc0527e7dadc71251e150229de827fef0ff1630d3b70ea33351cb706e5b06ae4',
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get('http://localhost:1337/api/checkpoints/' + id + '?populate=%2A', options);
  }
}
