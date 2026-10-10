import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('shukrana-concrete');
  isMobile = false;
  isMenuOpen = false;

  links = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Services', path: '/services', exact: false },
    { label: 'Projects', path: '/projects', exact: false },
    { label: 'Contact', path: '/contact', exact: false },
  ];

  footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Our Process', path: '/process' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQs', path: '/FAQs' },
  ];

  footerServices = [
    { label: 'Driveways', path: '/services' },
    { label: 'Patios', path: '/services' },
    { label: 'Sidewalks', path: '/services' },
    { label: 'Garage Floors', path: '/services' },
    { label: 'Foundations', path: '/services' },
    { label: 'Custom Concrete', path: '/services' },
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private router: Router,
  ) {
    // index.html loads the "Material Symbols Outlined" font, so make it the default.
    this.iconRegistry.setDefaultFontSetClass('material-symbols-outlined');

    // Close the mobile menu on navigation.
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => (this.isMenuOpen = false));
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 992;
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 992;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
