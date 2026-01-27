import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faHotel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  footerLinks = {
    Platform: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Why CapNest', href: '#' },
      { name: 'Properties', href: '#properties' },
      { name: 'Join Us', href: '#about' },
      { name: 'Testimonials', href: '#benefits' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclosures', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Investor Resources', href: '#' },
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
