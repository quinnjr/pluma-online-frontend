import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  //@ts-ignore
  private apiEndpoint = process.env.API_ENDPOINT;

  constructor(private http: HttpClient) {  }

  public get(location: string, options?: any): Observable<any> {
    return this.http.get(this.apiEndpoint + location, options)
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  public post(location: string, body: any, options?: any): Observable<any> {
    return this.http.post(this.apiEndpoint + location, body, options)
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  public request(request: HttpRequest<any>): Observable<any> {
    return this.http.request(request)
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }
}
