import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faHouseCircleCheck, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-how-it-works-section',
  imports: [FontAwesomeModule, TranslatePipe],
  templateUrl: './how-it-works-section.html',
  styleUrl: './how-it-works-section.css',
})
export class HowItWorksSection {
  steps = [
    {
      icon: faUserPlus,
      number: '01',
      title: 'howItWorksSection.step1Title',
      description: 'howItWorksSection.step1Description',
    },
    {
      icon: faHouseCircleCheck,
      number: '02',
      title: 'howItWorksSection.step2Title',
      description: 'howItWorksSection.step2Description',
    },
    {
      icon: faArrowTrendUp,
      number: '03',
      title: 'howItWorksSection.step3Title',
      description: 'howItWorksSection.step3Description',
    },
  ];
}
