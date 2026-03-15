import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { ImpressumPage } from './pages/impressum-page/impressum-page';
import { DatenschutzPage } from './pages/datenschutz-page/datenschutz-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'contact', component: ContactPage },
  { path: 'impressum', component: ImpressumPage },
  { path: 'datenschutz', component: DatenschutzPage }
];