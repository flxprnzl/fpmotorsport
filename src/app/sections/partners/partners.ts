import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

type PartnerItem = {
  name: string;
  url: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [RevealOnScroll],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class Partners {
  partners: PartnerItem[] = [
    { name: 'Finanz Forum GmbH', url: 'https://www.finanzforum.net/', image: 'assets/images/partners/partner-1.png', alt: 'Finanz Forum GmbH', width: 298, height: 169 },
    { name: 'Friesenbiene', url: 'https://www.friesenbiene.de/', image: 'assets/images/partners/partner-2.png', alt: 'Friesenbiene', width: 252, height: 273 },
    { name: 'Team Schirmer', url: 'https://www.teamschirmerparts.com/', image: 'assets/images/partners/partner-3.avif', alt: 'Team Schirmer', width: 1100, height: 84 },
    { name: 'Voss Competition', url: 'https://voss-competition.de/', image: 'assets/images/partners/partner-4.png', alt: 'Voss Competition', width: 3565, height: 1467 },
    { name: 'SimRacing VR ONE', url: 'https://simracing-koeln.de/', image: 'assets/images/partners/partner-5.png', alt: 'SimRacing VR ONE', width: 1274, height: 163 },
    { name: 'Hotel Schloss Friedestrom', url: 'https://www.friedestrom.de/', image: 'assets/images/partners/partner-6.png', alt: 'Hotel Schloss Friedestrom', width: 391, height: 404 },
    { name: 'ACV Einsteiger Slalom', url: 'https://www.acv.de/ueber-uns/acv-im-motorsport/automobilslalom-einsteiger-cup/', image: 'assets/images/partners/partner-7.png', alt: 'ACV Einsteiger Slalom', width: 1181, height: 1181 },
    { name: 'Speed Parts Performance', url: 'https://www.speedpartsperformance.de/', image: 'assets/images/partners/partner-8.png', alt: 'Speed Parts Performance', width: 2082, height: 493 },
  ];
}