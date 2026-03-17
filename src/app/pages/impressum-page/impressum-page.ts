import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-impressum-page',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './impressum-page.html',
  styleUrl: './impressum-page.scss',
})
export class ImpressumPage {}