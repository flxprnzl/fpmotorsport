import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-partners',
  imports: [RevealOnScroll],
  standalone: true,
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class Partners {}