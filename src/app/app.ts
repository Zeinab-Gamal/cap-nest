import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { HeroSection } from "./components/hero-section/hero-section";

@Component({
  selector: 'app-root',
  imports: [Navbar, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cap-nest');
}
