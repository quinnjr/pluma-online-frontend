// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-router.module')
      .then(m => m.AdminRouterModule)
  },
  {
    path: 'software',
    loadChildren: () => import('./software/software-router.module')
      .then(m => m.SoftwareRouterModule)
  },
  { path: 'people', component: PeopleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
