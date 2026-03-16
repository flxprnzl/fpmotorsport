import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
@Component({
  selector: 'app-gallery',
  imports: [RevealOnScroll],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {}
