import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faUsers, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FormModal } from '../form-modal/form-modal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-properties-section',
  imports: [FontAwesomeModule, FormModal, TranslatePipe],
  templateUrl: './properties-section.html',
  styleUrl: './properties-section.css',
})
export class PropertiesSection {
  showFormModal = signal<boolean>(false);

  locationIcon = faLocationDot;
  usersIcon = faUsers;
  arrowTrendUpIcon = faArrowTrendUp;
  properties = [
    {
      image: '/assets/imgs/property-1.jpg',
      title: 'propertiesSection.firstProperty',
      location: 'propertiesSection.riyadhSaudiArabia',
      price: '1,200,000',
      minInvestment: '100',
      funded: 72,
      investors: 148,
      returns: '12.4%',
      type: 'propertiesSection.residential',
    },
    // {
    //   image: '/assets/imgs/property-2.jpg',
    //   title: 'Skyline Penthouse',
    //   location: 'Miami, Florida',
    //   price: '$2,850,000',
    //   minInvestment: '$1,000',
    //   funded: 45,
    //   investors: 89,
    //   returns: '15.8%',
    //   type: 'Luxury',
    // },
    // {
    //   image: '/assets/imgs/property-3.jpg',
    //   title: 'Mediterranean Villa',
    //   location: 'San Diego, California',
    //   price: '$1,950,000',
    //   minInvestment: '$750',
    //   funded: 88,
    //   investors: 234,
    //   returns: '11.2%',
    //   type: 'Vacation',
    // },
  ];
  toggleFormModal() {
    this.showFormModal.set(!this.showFormModal());
  }
}
