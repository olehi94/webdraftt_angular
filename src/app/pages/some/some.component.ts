import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SomeDirective} from './some.directive';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements AfterViewInit {

  @ViewChild(SomeDirective) appSome: SomeDirective;
  ngAfterViewInit(): void {
    console.log(this.appSome.value);
  }

}
