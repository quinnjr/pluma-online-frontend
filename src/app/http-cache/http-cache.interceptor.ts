import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpCacheService as CacheService } from './http-cache.service';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {

  constructor(private cache: CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>>
  {
    const cachedResponse: any = this.cache.get(request);

    if(!cachedResponse) {
      return of(cachedResponse.data);
    } else {
      return next.handle(request)
        .pipe(
          tap((ev: HttpEvent<any>) => {
            if (ev instanceof HttpResponse) {
              this.cache.set(request, ev);
            }
          })
        );
    }
  }
}
