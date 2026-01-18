import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faPieChart, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-how-it-works-section',
  imports: [FontAwesomeModule],
  templateUrl: './how-it-works-section.html',
  styleUrl: './how-it-works-section.css',
})
export class HowItWorksSection {
  steps = [
    {
      icon: faSearch,
      number: '01',
      title: 'Browse Properties',
      description:
        'Explore our curated selection of premium real estate investments, from urban apartments to vacation properties.',
    },
    {
      icon: faPieChart,
      number: '02',
      title: 'Choose Your Share',
      description:
        'Select the percentage of ownership that fits your budget. Start with as little as $500 and build from there.',
    },
    {
      icon: faArrowTrendUp,
      number: '03',
      title: 'Earn Returns',
      description:
        'Receive proportional rental income monthly and benefit from property value appreciation over time.',
    },
  ];
}
