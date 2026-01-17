import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Properties", href: "#properties" },
    { name: "Benefits", href: "#benefits" },
    { name: "About", href: "#about" },
  ];

  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);

  constructor() {
    // window.addEventListener("scroll", this.onScroll.bind(this));
  }

  onScroll() {
    // this.isScrolled = window.scrollY > 50;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
