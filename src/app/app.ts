import { Component, inject, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { HeroSection } from './components/hero-section/hero-section';
import { HowItWorksSection } from './components/how-it-works-section/how-it-works-section';
import { PropertiesSection } from './components/properties-section/properties-section';
import { BenefitsSection } from './components/benefits-section/benefits-section';
import { StatsSection } from './components/stats-section/stats-section';
import { TestimonialsSection } from './components/testimonials-section/testimonials-section';
import { CTASection } from './components/ctasection/ctasection';
import { Footer } from './components/footer/footer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    HeroSection,
    HowItWorksSection,
    PropertiesSection,
    BenefitsSection,
    TestimonialsSection,
    CTASection,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cap-nest');

   private translate = inject(TranslateService);

  constructor() {
      this.translate.addLangs(['ar', 'en']);
      this.translate.setFallbackLang('en');
      this.translate.use('en');
  }
}
