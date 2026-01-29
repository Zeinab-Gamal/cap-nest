import { ApplicationConfig, inject, PLATFORM_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import {provideTranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { provideHttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideTranslateService({
      loader: isPlatformBrowser(inject(PLATFORM_ID))
        ? provideTranslateHttpLoader({
            prefix: '/assets/i18n/',
            suffix: '.json',
          })
        : undefined,
      fallbackLang: 'en',
      lang: 'en',
    }),
  ]
};
