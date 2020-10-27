import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.css']
})
export class ContactsItemComponent {

  @Input() name = 'Unknown';
  @Output() nameChange = new EventEmitter<string>();

  constructor() { }

  showContactPerson(): void {
    this.name = 'Peter';
    this.nameChange.emit(this.name);
  }

}
