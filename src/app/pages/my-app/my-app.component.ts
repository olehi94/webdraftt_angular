import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {

  constructor() { }

  contacts = ['Oleh', 'Stepan', 'Bodya', 'Vasya'];

  showHideContacts(): void {
    document.querySelector('ul').classList.toggle('hidden');
  }

  showContacts(): void {
    document.querySelector('ul').classList.remove('hidden');
  }

  hideContacts(): void {
    document.querySelector('ul').classList.add('hidden');
  }

  ngOnInit(): void {
  }

}
