import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedin, faMedium, faTwitter, faReddit, faSnapchat, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faHotel, faT } from '@fortawesome/free-solid-svg-icons';
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
    { icon: faHotel, href: 'https://www.crunchbase.com/organization/capnest'},
    { icon: faTwitter, href: 'https://x.com/capnest_ksa' },
    { icon: faMedium, href: 'https://medium.com/@capnestsm' },
    { icon: faReddit, href: 'https://www.reddit.com/user/CapNest_Official/' },
    { icon: faInstagram, href: 'https://www.instagram.com/capnest.sa/' },
    { icon: faFacebookF, href: 'https://www.facebook.com/people/Capnest/61586988209470/' },
    { icon: faSnapchat, href: 'https://www.snapchat.com/@capnest1' },
    { icon: faTiktok, href: 'https://www.tiktok.com/@capnest1' },
  ];
}
