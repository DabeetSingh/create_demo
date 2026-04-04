import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('construct-proj');
  isMobile = false;
  isMenuOpen = false;
  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }
  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

