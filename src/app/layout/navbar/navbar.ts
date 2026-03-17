import {
  Component,
  HostListener,
  OnInit,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

type NavItem = {
  label: string;
  href: string;
  id: string;
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  private platformId = inject(PLATFORM_ID);

  menuOpen = false;
  activeSection = 'hero';
  scrolled = false;

  navItems: NavItem[] = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Disziplinen', href: '#disciplines', id: 'disciplines' },
    { label: 'Nordschleife', href: '#nordschleife', id: 'nordschleife' },
    { label: 'Galerie', href: '#gallery', id: 'gallery' },
    { label: 'Partner', href: '#partners', id: 'partners' },
    { label: 'Kontakt', href: '#contact', id: 'contact' },
  ];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.updateNavbarState();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  setActive(id: string): void {
    this.activeSection = id;
    this.closeMenu();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateNavbarState();
  }

  private updateNavbarState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.scrolled = window.scrollY > 20;

    const offset = 140;
    let currentSection = this.navItems[0]?.id ?? 'hero';

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (!section) continue;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (window.scrollY + offset >= top && window.scrollY + offset < top + height) {
        currentSection = item.id;
      }
    }

    this.activeSection = currentSection;
  }
}