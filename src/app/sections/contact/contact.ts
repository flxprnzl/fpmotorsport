import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RevealOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {}