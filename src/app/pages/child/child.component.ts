import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() messageChild: string;
  @Output() changeMessageChild: EventEmitter<string> = new EventEmitter<string>();

  setMessage(): void {
    this.messageChild = 'Message from Matvey';
    this.changeMessageChild.emit(this.messageChild);
  }
}
