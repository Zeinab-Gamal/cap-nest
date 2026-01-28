import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faHotel } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  footerLinks = {
    Platform: [
      { name: 'navLinks.howItWorks', href: '#how-it-works' },
      { name: 'navLinks.whyCapNest', href: '#benefits' },
      { name: 'navLinks.properties', href: '#properties' },
      { name: 'navLinks.joinUs', href: '#joinus' },
      { name: 'navLinks.testimonials', href: '#testimonials' },
    ],
    legal: [
      { name: 'footer.terms', href: '#' },
      { name: 'footer.privacy', href: '#' },
      { name: 'footer.cookie', href: '#' },
      { name: 'footer.disclosures', href: '#' },
    ],
    support: [
      { name: 'footer.helpcenter', href: '#' },
      { name: 'footer.contactUs', href: '#' },
      { name: 'footer.InvestorResources', href: '#' },
    ],
  };

  socialLinks = [
    { icon: faLinkedin, href: 'https://www.linkedin.com/company/capnest' },
    { icon: faFacebookF, href: 'https://www.facebook.com/cap.nest/' },
    { icon: faInstagram, href: 'https://www.instagram.com/capnest' },
    { icon: faMedium, href: 'https://medium.com/@capnest' },
    { icon: faHotel, href: 'https://www.crunchbase.com/organization/capnest' },
    { icon: faEnvelope, href: 'info@capnest.sa' },
  ];
}
