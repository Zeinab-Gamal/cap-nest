import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faWallet,
  faBarChart,
  faShield,
  faUsers,
  faGlobe,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-benefits-section',
  imports: [FontAwesomeModule, TranslatePipe],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.css',
})
export class BenefitsSection {
  benefits = [
    {
      icon: faWallet,
      title: 'benefitsSection.benefit1Title',
      description: 'benefitsSection.benefit1Description',
    },
    {
      icon: faBarChart,
      title: 'benefitsSection.benefit2Title',
      description: 'benefitsSection.benefit2Description',
    },
    {
      icon: faShield,
      title: 'benefitsSection.benefit3Title',
      description: 'benefitsSection.benefit3Description',
    },
    {
      icon: faUsers,
      title: 'benefitsSection.benefit4Title',
      description: 'benefitsSection.benefit4Description',
    },
    {
      icon: faClock,
      title: 'benefitsSection.benefit5Title',
      description: 'benefitsSection.benefit5Description',
    },
    {
      icon: faGlobe,
      title: 'benefitsSection.benefit6Title',
      description: 'benefitsSection.benefit6Description',
    },
  ];
}
