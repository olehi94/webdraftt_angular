import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() nameCh: string;
  @Output() nameChChange: EventEmitter<string> = new EventEmitter<string>();
}
