import { Component, OnDestroy, OnInit, output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
@Component({
  selector: 'app-form-modal',
  imports: [FaIconComponent],
  templateUrl: './form-modal.html',
  styleUrl: './form-modal.css',
})
export class FormModal implements OnInit, OnDestroy {
  onClose = output<void>();
  closeIcon = faClose;

  closeModal() {
    this.onClose.emit();
  }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }
}
