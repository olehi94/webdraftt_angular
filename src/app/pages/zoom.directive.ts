import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  private defaultSize: number;

  constructor(private el: ElementRef) {
    this.defaultSize = this.el.nativeElement.style.fontSize.replace('px', '');
  }

  @HostListener('mouseover') onMouseEnter(): void {
    this.setFontSize(20);
  }

  @HostListener('mouseout') onMouseLeave(): void {
    this.setFontSize(this.defaultSize)
  }

  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}px`;
  }
}
