import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactPerson: string;

  constructor() { }

  showParentData(): void {
    this.contactPerson = 'Parent';
  }

  ngOnInit(): void {
  }

}
