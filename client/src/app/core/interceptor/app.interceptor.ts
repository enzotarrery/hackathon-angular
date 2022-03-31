import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      let head = request.headers
      head = request.headers.set('Authorization', 'Bearer eb6bc3bfea7804faa5640c491ebbdc6c43fe2d6647aeac94f37315a27162fd547097243b4064fd1546cfeae8cb67a2ad19492a18341368cb0a3056021e33ffaede290c6d5e9f4c8e0ddfcb54e6e78dc742d3275e7dea5dc6ce8d9970b732a41bddce94eb5d2877fe52571f681cdff634bdcb32a1542f30b52112734a84df42a5')      
      request.clone({headers: head})
      console.log(head);
      
      console.log(request);
    
    return next.handle(request);
  }
}
