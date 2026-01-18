import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-section',
  imports: [],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.css',
})
export class StatsSection {
  stats = [
    { value: '$250M+', label: 'Total Assets Under Management' },
    { value: '12,000+', label: 'Investors Worldwide' },
    { value: '85+', label: 'Properties in Portfolio' },
    { value: '14.2%', label: 'Average Annual Return' },
  ];
}
