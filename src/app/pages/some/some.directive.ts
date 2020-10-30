import { Directive } from '@angular/core';

@Directive({
  selector: '[appSome]'
})
export class SomeDirective {
  value = 123;
}
