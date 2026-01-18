import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

@Component({
  selector: 'app-hero-section',
  imports: [FontAwesomeModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  arrowRightIcon = faArrowRight;
  playIcon = faPlay;
}
