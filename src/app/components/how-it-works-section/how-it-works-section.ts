import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faHouseCircleCheck, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-how-it-works-section',
  imports: [FontAwesomeModule],
  templateUrl: './how-it-works-section.html',
  styleUrl: './how-it-works-section.css',
})
export class HowItWorksSection {
  steps = [
    {
      icon: faUserPlus,
      number: '01',
      title: 'Sign Up & Join',
      description:
        'Create your free account and fill in your basic details to join the waiting list.',
    },
    {
      icon: faHouseCircleCheck,
      number: '02',
      title: 'Choose Property',
      description:
        'Browse the first available property through Digishares and choose your investment share.',
    },
    {
      icon: faArrowTrendUp,
      number: '03',
      title: 'Invest & Earn',
      description: 'Invest and start earning monthly returns from your real estate investments.',
    },
  ];
}
