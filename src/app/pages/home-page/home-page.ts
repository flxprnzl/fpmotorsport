import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Disciplines } from '../../sections/disciplines/disciplines';
import { Nordschleife } from '../../sections/nordschleife/nordschleife';
import { Gallery } from '../../sections/gallery/gallery';
import { Contact } from '../../sections/contact/contact';
import { Footer } from '../../layout/footer/footer';
import { Partners } from '../../sections/partners/partners';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Disciplines,
    Nordschleife,
    Gallery,
    Partners,
    Contact,
    Footer
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {}