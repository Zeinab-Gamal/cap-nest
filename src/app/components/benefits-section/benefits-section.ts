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

@Component({
  selector: 'app-benefits-section',
  imports: [FontAwesomeModule],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.css',
})
export class BenefitsSection {
  benefits = [
    {
      icon: faWallet,
      title: 'Low Minimum Investment',
      description:
        'Start building your portfolio from just 100 SAR. No massive down payments required.',
    },
    {
      icon: faBarChart,
      title: 'Diversified Portfolio',
      description:
        'Spread your investment across multiple properties to reduce risk and maximize returns.',
    },
    {
      icon: faShield,
      title: 'REGA Regulated',
      description:
        'All investments are fully compliant with SEC regulations, ensuring your money is protected.',
    },
    {
      icon: faUsers,
      title: 'Professional Management',
      description:
        'Our expert team handles property management, tenants, and maintenance – you just earn.',
    },
    {
      icon: faClock,
      title: 'Monthly Income',
      description: 'Receive your share of rental income directly to your account every month.',
    },
    {
      icon: faGlobe,
      title: 'Invest Anywhere',
      description: 'Access premium properties nationwide from the comfort of your home.',
    },
  ];
}
