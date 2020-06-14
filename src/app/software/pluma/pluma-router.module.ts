// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { List } from 'immutable';

import { PlumaComponent } from './pluma.component';
import { PluginsComponent } from './plugins/plugins.component';
import { PipelinesComponent } from './pipelines/pipelines.component';

const routes: List<Route> = List([
  { path: 'plugins', component: PluginsComponent },
  { path: 'pipelines', component: PipelinesComponent },
  { path: '', component: PlumaComponent, pathMatch: 'full' }
]);

@NgModule({
  imports: [ RouterModule.forChild(routes.toArray()) ],
  exports: [ RouterModule ]
})
export class PlumaRouterModule { }
