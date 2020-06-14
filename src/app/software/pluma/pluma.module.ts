// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlumaComponent } from './pluma.component';
import { ApplicationComponent } from './application/application.component';
import { PluginsComponent } from './plugins/plugins.component';
import { PipelinesComponent } from './pipelines/pipelines.component';

@NgModule({
  declarations: [
    PlumaComponent,
    PluginsComponent,
    PipelinesComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    PlumaComponent,
    PluginsComponent,
    PipelinesComponent
  ]
})
export class PlumaModule {  }
