import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  images = [
    'assets/images/hero/hero1.jpg',
    'assets/images/hero/hero2.jpg',
    'assets/images/hero/hero3.jpg',
    'assets/images/hero/hero4.jpg',
    'assets/images/hero/hero5.jpg',
    'assets/images/hero/hero6.jpg'
  ];

  activeIndex = 0;
  private interval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
  }
}