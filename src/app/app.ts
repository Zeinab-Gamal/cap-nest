import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { HeroSection } from './components/hero-section/hero-section';
import { HowItWorksSection } from './components/how-it-works-section/how-it-works-section';
import { PropertiesSection } from './components/properties-section/properties-section';
import { BenefitsSection } from './components/benefits-section/benefits-section';
import { StatsSection } from './components/stats-section/stats-section';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    HeroSection,
    HowItWorksSection,
    PropertiesSection,
    BenefitsSection,
    StatsSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cap-nest');
}
