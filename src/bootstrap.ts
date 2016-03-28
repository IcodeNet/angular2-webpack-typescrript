///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';

enableProdMode();
/*Prodmode makes sure that change detection CD is run only once per browser event, so you won't have cycles.
 In Devmode (which is the default) CD is performed twice to double check that you haven't written code with any side effects.*/

/*
 * App Component
 * top level component that holds the tree of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
bootstrap(App)
  .catch(err => console.error(err));
