import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials-section',
  imports: [FaIconComponent, FontAwesomeModule, TranslatePipe],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
})
export class TestimonialsSection {
  starIcon = faStar;
  testimonials = [
    {
      name: 'testimonialsSection.testimonial1.name',
      role: 'testimonialsSection.testimonial1.role',
      content: 'testimonialsSection.testimonial1.quote',
      rating: 5,
      avatar: 'testimonialsSection.testimonial1.avatar',
    },
    {
      name: 'testimonialsSection.testimonial2.name',
      role: 'testimonialsSection.testimonial2.role',
      content: 'testimonialsSection.testimonial2.quote',
      rating: 5,
      avatar: 'testimonialsSection.testimonial2.avatar',
    },
    {
      name: 'testimonialsSection.testimonial3.name',
      role: 'testimonialsSection.testimonial3.role',
      content: 'testimonialsSection.testimonial3.quote',
      rating: 5,
      avatar: 'testimonialsSection.testimonial3.avatar',
    },
  ];
  getStars(rating: number): number[] {
    return Array.from({ length: rating });
  }
}
