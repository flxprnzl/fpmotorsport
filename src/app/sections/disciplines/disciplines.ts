import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-disciplines',
  imports: [RevealOnScroll],
  templateUrl: './disciplines.html',
  styleUrl: './disciplines.scss',
})
export class Disciplines {}
