import {AfterViewInit, Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDuplicateContent]'
})
export class DuplicateContentDirective implements AfterViewInit {
  @Input('appDuplicateContent') duplicateContent = false;

  private contentWasDuplicated = false;

  constructor(private tpl: TemplateRef<any>, private vc: ViewContainerRef) {
    this.vc.createEmbeddedView(this.tpl);
  }

  ngAfterViewInit(): void {
    if (this.duplicateContent && !this.contentWasDuplicated) {
      this.vc.insert(this.vc.createEmbeddedView(this.tpl));
      this.contentWasDuplicated = true;
    }
  }
}
