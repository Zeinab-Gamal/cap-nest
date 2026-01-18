import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ctasection',
  imports: [FaIconComponent],
  templateUrl: './ctasection.html',
  styleUrl: './ctasection.css',
})
export class CTASection {
  arrowRightIcon = faArrowRight;
}
