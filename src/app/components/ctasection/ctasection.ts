import { Component, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { sign } from 'crypto';
import { FormModal } from "../form-modal/form-modal";

@Component({
  selector: 'app-ctasection',
  imports: [FaIconComponent, FormModal],
  templateUrl: './ctasection.html',
  styleUrl: './ctasection.css',
})
export class CTASection {
  arrowRightIcon = faArrowRight;

  showFormModal = signal<boolean>(false);

  toggleFormModal() {
    this.showFormModal.set(!this.showFormModal());
  }
}
