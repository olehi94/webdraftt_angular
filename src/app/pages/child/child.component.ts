import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() message: EventEmitter<string> = new EventEmitter<string>();

  sendMessage(): void {
    this.message.emit('Child value');
  }
}
