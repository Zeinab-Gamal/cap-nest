import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { sign } from 'crypto';
import { FormModal } from "../form-modal/form-modal";

@Component({
  selector: 'app-hero-section',
  imports: [FontAwesomeModule, FormModal],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  arrowRightIcon = faArrowRight;
  playIcon = faPlay;

  showFormModal = signal<boolean>(false);

  toggleFormModal() {
    this.showFormModal.set(!this.showFormModal());
  }
}
