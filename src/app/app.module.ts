// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Temporary to diagnose routing issues
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { SoftwareModule } from './software/software.module';

import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar.component';
import { PeopleComponent } from './people/people.component';

import { BackendService } from './backend.service';

import { HttpCacheService } from './http-cache/http-cache.service';
import { HttpCacheInterceptor } from './http-cache/http-cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageNotFoundComponent,
    HomeComponent,
    SidebarComponent,
    PeopleComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Internal modules
    SoftwareModule,
    AppRouterModule
  ],
  providers: [
    BackendService,
    HttpCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(private router: Router) {
    console.log(this.router.config);
  }
}
