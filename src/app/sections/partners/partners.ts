import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

type PartnerItem = {
  name: string;
  url: string;
  image: string;
  alt: string;
};

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [NgOptimizedImage, RevealOnScroll],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class Partners {
  partners: PartnerItem[] = [
    {
      name: 'Finanz Forum GmbH',
      url: 'https://www.finanzforum.net/',
      image: 'assets/images/partners/partner-1.png',
      alt: 'Finanz Forum GmbH'
    },
    {
      name: 'Friesenbiene',
      url: 'https://www.friesenbiene.de/',
      image: 'assets/images/partners/partner-2.png',
      alt: 'Friesenbiene'
    },
    {
      name: 'Team Schirmer',
      url: 'https://www.teamschirmerparts.com/',
      image: 'assets/images/partners/partner-3.avif',
      alt: 'Team Schirmer'
    },
    {
      name: 'Voss Competition',
      url: 'https://voss-competition.de/',
      image: 'assets/images/partners/partner-4.png',
      alt: 'Voss Competition'
    },
    {
      name: 'SimRacing VR ONE',
      url: 'https://simracing-koeln.de/',
      image: 'assets/images/partners/partner-5.png',
      alt: 'SimRacing VR ONE'
    },
    {
      name: 'Hotel Schloss Friedestrom',
      url: 'https://www.friedestrom.de/',
      image: 'assets/images/partners/partner-6.png',
      alt: 'Hotel Schloss Friedestrom'
    },
    {
      name: 'ACV Einsteiger Slalom',
      url: 'https://www.acv.de/ueber-uns/acv-im-motorsport/automobilslalom-einsteiger-cup/',
      image: 'assets/images/partners/partner-7.png',
      alt: 'ACV Einsteiger Slalom'
    },
    {
      name: 'Speed Parts Performance',
      url: 'https://www.instagram.com/speedpartsperformance',
      image: 'assets/images/partners/partner-8.png',
      alt: 'Speed Parts Performance'
    }
  ];
}