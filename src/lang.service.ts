import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

const LANG_KEY = 'app_lang';

@Injectable({ providedIn: 'root' })
export class LangService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  init() {
    let lang = 'en';

    if (isPlatformBrowser(this.platformId)) {
      const savedLang =
        localStorage.getItem(LANG_KEY) ||
        this.translate.getBrowserLang();

      if (savedLang && ['en', 'ar'].includes(savedLang)) {
        lang = savedLang;
      }
    }

    this.translate.use(lang);
    this.applyDir(lang);
  }

  switch(lang: string) {
    this.translate.use(lang);
    this.applyDir(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(LANG_KEY, lang);
    }
  }

  get current() {
    return this.translate.getCurrentLang();
  }

  private applyDir(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }
}
