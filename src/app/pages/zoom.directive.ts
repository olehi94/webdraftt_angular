import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input('appZoom') zoomSize: number | string;

  private readonly defaultSize: number | string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.defaultSize = getComputedStyle(el.nativeElement).fontSize.replace('px', '');
  }

  @HostListener('mouseover') onMouseEnter(): void {
    this.setFontSize(this.zoomSize);
  }

  @HostListener('mouseout') onMouseLeave(): void {
    this.setFontSize(this.defaultSize);
  }

  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}px`;
  }
}
