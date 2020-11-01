import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  private readonly defaultSize: number | string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(renderer);
    // this.defaultSize = el.nativeElement.style.fontSize.replace('px', '');
    this.defaultSize = getComputedStyle(el.nativeElement).fontSize.replace('px', '');
  }

  @HostListener('mouseover') onMouseEnter(): void {
    this.setFontSize(20);
  }

  @HostListener('mouseout') onMouseLeave(): void {
    this.setFontSize(this.defaultSize);
  }

  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}px`;
  }
}
