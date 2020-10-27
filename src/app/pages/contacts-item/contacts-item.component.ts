import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.css']
})
export class ContactsItemComponent {

  @Input() name: string;

  constructor() { }

}
