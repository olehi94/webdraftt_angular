import {AfterViewInit, Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDuplicateContent]'
})
export class DuplicateContentDirective implements AfterViewInit {

  @Input() duplicateContent = false;

  private contentWasDuplicated = false;

  constructor(private tpl: TemplateRef<any>, private vc: ViewContainerRef) {
    this.vc.createEmbeddedView(this.tpl);
  }

  ngAfterViewInit(): void {

  }

}
