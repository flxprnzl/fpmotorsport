import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

type GalleryCard = {
  key: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  large?: boolean;
};

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage, RevealOnScroll],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  activeCategory: string | null = null;

  cards: GalleryCard[] = [
    {
      key: 'trackdays',
      title: 'Trackdays',
      text: 'Streckenpraxis und Entwicklung auf dem Track.',
      image: 'assets/images/gallery/gallery-1.jpg',
      alt: 'Trackdays auf der Rennstrecke',
      large: true
    },
    {
      key: 'simracing',
      title: 'SimRacing',
      text: 'Virtuelles Training für Konstanz und Präzision.',
      image: 'assets/images/gallery/gallery-2.jpg',
      alt: 'SimRacing Setup',
    },
    {
      key: 'nordschleife',
      title: 'Nordschleife',
      text: 'Touristenfahrten und Lernerfahrung Runde für Runde.',
      image: 'assets/images/gallery/gallery-3.jpg',
      alt: 'Fahrzeug auf der Nordschleife',
    },
    {
      key: 'slalom',
      title: 'ACV Slalom',
      text: 'Fahrzeugkontrolle, Reaktion und saubere Linien.',
      image: 'assets/images/gallery/gallery-4.jpg',
      alt: 'ACV Slalom Event',
    }
  ];

  openGallery(category: string): void {
    this.activeCategory = category;
  }

  closeGallery(): void {
    this.activeCategory = null;
  }
}