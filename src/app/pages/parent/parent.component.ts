import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child: ChildComponent;

  ngAfterViewInit(): void {
    console.log(this.child.headline);
    console.log(this.child.iValue);
  }


}
