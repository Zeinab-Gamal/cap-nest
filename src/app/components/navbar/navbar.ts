import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why CapNest', href: '#' },
    { name: 'Properties', href: '#properties' },
    { name: 'Join Us', href: '#about' },
    { name: 'Testimonials', href: '#benefits' },
  ];

  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);
  globe = faGlobe;
  bars = faBars;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
