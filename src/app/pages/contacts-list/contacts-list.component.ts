import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ContactsItemComponent} from '../contacts-item/contacts-item.component';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() title: string;

  company = 'Google Inc.';

  @ViewChild(ContactsItemComponent) vwCh: ContactsItemComponent;
  @ContentChild(ContactsItemComponent) cntCh: ContactsItemComponent;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('OnInit', this.company);
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.cntCh);
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.vwCh);
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

}
