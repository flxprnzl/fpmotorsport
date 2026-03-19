import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { GalleryCard, GalleryImage } from './gallery.types';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage, RevealOnScroll],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {

  // Ebene 1 – Welche Kategorie ist offen?
  activeCard: GalleryCard | null = null;

  // Ebene 2 – Welches Einzelbild ist offen?
  activeImage: GalleryImage | null = null;
  activeImageIndex: number = 0;

  cards: GalleryCard[] = [
    {
      key: 'trackdays',
      title: 'Trackdays',
      text: 'Streckenpraxis und Entwicklung auf dem Track.',
      image: 'assets/images/gallery/gallery-1.jpg',
      alt: 'Trackdays auf der Rennstrecke',
      large: true,
      images: [
        { src: 'https://placehold.co/1200x800', alt: 'Trackday 1', width: 1200, height: 800 },
        { src: 'https://placehold.co/1200x800', alt: 'Trackday 2', width: 1200, height: 800 },
        { src: 'https://placehold.co/800x1200', alt: 'Trackday 3', width: 800, height: 1200 },
        { src: 'https://placehold.co/1200x800', alt: 'Trackday 4', width: 1200, height: 800 },
        { src: 'https://placehold.co/1200x800', alt: 'Trackday 5', width: 1200, height: 800 },
        { src: 'https://placehold.co/800x1200', alt: 'Trackday 6', width: 800, height: 1200 },
      ]
    },
    {
      key: 'simracing',
      title: 'SimRacing',
      text: 'Virtuelles Training für Konstanz und Präzision.',
      image: 'assets/images/gallery/gallery-2.jpg',
      alt: 'SimRacing Setup',
      images: [
        { src: 'https://placehold.co/1200x800', alt: 'SimRacing 1', width: 1200, height: 800 },
        { src: 'https://placehold.co/1200x800', alt: 'SimRacing 2', width: 1200, height: 800 },
        { src: 'https://placehold.co/1200x800', alt: 'SimRacing 3', width: 1200, height: 800 },
        { src: 'https://placehold.co/800x1200', alt: 'SimRacing 4', width: 800, height: 1200 },
      ]
    },
    {
      key: 'nordschleife',
      title: 'Nordschleife',
      text: 'Touristenfahrten und Lernerfahrung Runde für Runde.',
      image: 'assets/images/gallery/gallery-3.jpg',
      alt: 'Fahrzeug auf der Nordschleife',
      images: [
        { src: 'https://placehold.co/1200x800', alt: 'Nordschleife 1', width: 1200, height: 800 },
        { src: 'https://placehold.co/1200x800', alt: 'Nordschleife 2', width: 1200, height: 800 },
        { src: 'https://placehold.co/800x1200', alt: 'Nordschleife 3', width: 800, height: 1200 },
        { src: 'https://placehold.co/1200x800', alt: 'Nordschleife 4', width: 1200, height: 800 },
      ]
    },
    {
      key: 'slalom',
      title: 'ACV Slalom',
      text: 'Fahrzeugkontrolle, Reaktion und saubere Linien.',
      image: 'assets/images/gallery/gallery-4.jpg',
      alt: 'ACV Slalom Event',
      images: [
        { src: 'https://placehold.co/1200x800', alt: 'Slalom 1', width: 1200, height: 800 },
        { src: 'https://placehold.co/1200x800', alt: 'Slalom 2', width: 1200, height: 800 },
        { src: 'https://placehold.co/1200x800', alt: 'Slalom 3', width: 1200, height: 800 },
      ]
    }
  ];

  openCategory(card: GalleryCard): void {
    this.activeCard = card;
    document.body.style.overflow = 'hidden';
  }

  openImage(image: GalleryImage, index: number): void {
    this.activeImage = image;
    this.activeImageIndex = index;
  }

  closeImage(): void {
    this.activeImage = null;
  }

  closeCategory(): void {
    this.activeCard = null;
    this.activeImage = null;
    document.body.style.overflow = '';
  }

  nextImage(): void {
    if (!this.activeCard) return;
    this.activeImageIndex = (this.activeImageIndex + 1) % this.activeCard.images.length;
    this.activeImage = this.activeCard.images[this.activeImageIndex];
  }

  prevImage(): void {
    if (!this.activeCard) return;
    this.activeImageIndex =
      (this.activeImageIndex - 1 + this.activeCard.images.length) % this.activeCard.images.length;
    this.activeImage = this.activeCard.images[this.activeImageIndex];
  }
}
