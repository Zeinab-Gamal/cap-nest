import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';
import { FormModal } from '../form-modal/form-modal';
@Component({
  selector: 'app-navbar',
  imports: [NgClass, FontAwesomeModule, FormModal],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why CapNest', href: '#benefits' },
    { name: 'Properties', href: '#properties' },
    { name: 'Join Us', href: '#joinus' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  showFormModal = signal<boolean>(false);
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
  goToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleFormModal() {
    this.showFormModal.set(!this.showFormModal());
  }
}
