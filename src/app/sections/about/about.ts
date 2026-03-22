import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScroll, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  isHovering = false;
  cursorX = 0;
  cursorY = 0;

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.cursorX = event.clientX - rect.left;
    this.cursorY = event.clientY - rect.top;
  }

  onMouseEnter(): void {
    this.isHovering = true;
  }

  onMouseLeave(): void {
    this.isHovering = false;
  }
}