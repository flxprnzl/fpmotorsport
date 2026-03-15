import { Component } from '@angular/core';
import { Navbar} from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-datenschutz-page',
  standalone: true,
  imports: [Navbar,Footer],
  templateUrl: './datenschutz-page.html',
  styleUrl: './datenschutz-page.scss',
})
export class DatenschutzPage {}
