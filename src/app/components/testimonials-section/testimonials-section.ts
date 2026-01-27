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
      name: 'Fatima Al-Ali',
      role: 'Real Estate Investor, Riyadh',
      content:
        'I was looking for a safe way to invest in Saudi real estate. CapNest made it so easy. I invested 500 SAR in a property in Riyadh and receive a steady monthly return. I recommend it to anyone wanting to start real estate investing.',
      rating: 5,
      avatar: 'FA',
    },
    {
      name: 'Khalid Al-Ahmad',
      role: 'Software Engineer, Jeddah',
      content:
        "As a young professional starting my career, I didn't think I could invest in real estate. CapNest changed that. Now I have a diversified portfolio of 3 properties in different cities. The returns are much better than a savings account.",
      rating: 5,
      avatar: 'KA',
    },
    {
      name: 'Noura Al-Salem',
      role: 'Teacher, Dammam',
      content:
        'I wanted to build an additional income source for the future. CapNest is a trusted platform regulated by REGA, which is very important to me. I invested 1000 SAR and receive monthly income that helps me with better financial planning. Thank you CapNest!',
      rating: 5,
      avatar: 'NS',
    },
  ];
  getStars(rating: number): number[] {
    return Array.from({ length: rating });
  }
}
