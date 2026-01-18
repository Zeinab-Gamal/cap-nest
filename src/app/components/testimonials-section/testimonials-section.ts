import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials-section',
  imports: [FaIconComponent, FontAwesomeModule],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
})
export class TestimonialsSection {
  starIcon = faStar;
  testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Tech Entrepreneur',
      content:
        "CapNest made real estate investing accessible for me. I've diversified across 5 properties with returns that beat my stock portfolio.",
      rating: 5,
      avatar: 'SM',
    },
    {
      name: 'David Chen',
      role: 'Financial Analyst',
      content:
        'As someone in finance, I was skeptical at first. But the transparency and consistent returns have made me a believer. Highly recommend.',
      rating: 5,
      avatar: 'DC',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Small Business Owner',
      content:
        'The monthly rental income has become a reliable passive income stream. The platform is intuitive and the team is incredibly responsive.',
      rating: 5,
      avatar: 'MR',
    },
  ];
  getStars(rating: number): number[] {
    return Array.from({ length: rating });
  }
}
