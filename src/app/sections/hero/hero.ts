import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  images = [
    'assets/images/hero/hero1.jpg',
    'assets/images/hero/hero2.jpg',
    'assets/images/hero/hero3.jpg',
    'assets/images/hero/hero4.jpg',
    'assets/images/hero/hero5.jpg',
    'assets/images/hero/hero6.jpg',
  ];
}