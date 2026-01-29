import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import {provideTranslateService} from "@ngx-translate/core";
import { provideHttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';
import ar from '../assets/i18n/ar.json';
import en from '../assets/i18n/en.json';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideTranslateService({
      loader: {
      provide: TranslateLoader,
      useValue: {
          getTranslation: (lang: string) => of(lang === 'ar' ? ar : en)
        }
      },
      fallbackLang: 'en',
      lang: 'en'
    })
  ]
};
