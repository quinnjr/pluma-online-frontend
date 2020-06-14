// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { List, Map, Record } from 'immutable';
import { Observable, Subscriber, of } from 'rxjs';
import noop from 'lodash.noop';

import { BackendService } from '../../../backend.service';

import { Category } from './category';
import { Plugin } from './plugin';

@Component({
  selector: 'biorg-pluma-plugins',
  templateUrl: './plugins.component.html'
})
export class PluginsComponent implements OnInit {

  private plugins: List<Plugin> = List([]);
  private categories: List<Category> = List([]);

  public linkActive: number = 0;

  constructor(
    private backend: BackendService
  ) {  }

  public ngOnInit() {
    const categories = window.sessionStorage.getItem('categories');
    if (!categories) {
      this.backend.get('/categories')
        .subscribe((categories: any) => {
          window.sessionStorage.setItem('categories', JSON.stringify(categories.data))
          this.categories = List(categories.data)
        });
    } else {
      this.categories = List(JSON.parse(categories));
    }

    const plugins = window.sessionStorage.getItem('plugins');
    if (!plugins) {
      this.backend.get('/plugins')
        .subscribe((plugins: any) => {
          window.sessionStorage.setItem('plugins', JSON.stringify(plugins.data));
          this.plugins = List()
        })
    }

  }

  public getCategories(): List<Category> {
    return this.categories;
  }

  public getPlugins(): List<Plugin> {
    return this.plugins
      .filter((plugin => plugin.category_id === this.linkActive));
  }

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public setLinkActive(n: number) {
    this.linkActive = n;
  }
}
