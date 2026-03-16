import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScroll implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(this.el.nativeElement, 'revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'revealed');
          observer.unobserve(this.el.nativeElement);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}