// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { List } from 'immutable';

import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';

const routes: List<Route> = List([]);

@NgModule({
  imports: [ RouterModule.forChild(routes.toArray()) ],
  exports: [ RouterModule ]
})
export class AdminRouterModule { }
