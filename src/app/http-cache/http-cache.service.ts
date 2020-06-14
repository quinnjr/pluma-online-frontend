// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private store = window.sessionStorage;

  constructor() { }

  public get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = JSON.parse(this.store.getItem(url));

    if (!cached) {
      return undefined;
    } else {
      const isExpired = cached.expiry < Date.now();

      if (isExpired) {
        this.store.removeItem(url);
        return undefined;
      } else {
        return cached.response;
      }
    }
  }

  public set(req: HttpRequest<any>, res: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry = { res, expiry: Date.now() + 36000 }

    this.store.setItem(url, JSON.stringify(entry));
  }
}
