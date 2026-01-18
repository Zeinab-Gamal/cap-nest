import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    invest: [
      { name: 'Browse Properties', href: '#' },
      { name: 'How It Works', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'FAQ', href: '#' },
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
      { name: 'API Documentation', href: '#' },
    ],
  };

  socialLinks = [
    { icon: faTwitter, href: '#' },
    { icon: faInstagram, href: '#' }, 
    { icon: faFacebookF, href: '#' },
  ];
}
