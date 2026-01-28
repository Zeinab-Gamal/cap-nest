import { Component, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormModal } from '../form-modal/form-modal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-ctasection',
  imports: [FaIconComponent, FormModal, TranslatePipe],
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
