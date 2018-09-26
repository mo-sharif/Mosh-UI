import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// use the require method provided by webpack
declare const require;

if (environment.production) {
  enableProdMode();
}

const compilerOptions: any = {};

// Check if we have any language selected.
const localeId = localStorage.getItem('portal-material-locale');
if (null !== localeId) {
  // We use the webpack raw-loader to return the content as a string
  let translations = null;
  try {
    translations = require('raw-loader!./locale/' + localeId + '.xlf');
  } catch (error) {
    console.error('Portal could not find translation file locale/' + localeId + '.xlf');
  }
  if (null !== translations) {
    // Set up translations in compiler options for app.
    compilerOptions.providers =  [{
      provide: TRANSLATIONS, useValue: translations
    }, {
      provide: TRANSLATIONS_FORMAT, useValue: 'xlf'
    }];
  }
}

platformBrowserDynamic().bootstrapModule(AppModule, compilerOptions)
  .catch(err => console.log(err));
