import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';

@Component({
  selector: 'app-from-event-example',
  templateUrl: './from-event-example.component.html',
  styleUrls: ['./from-event-example.component.css']
})
export class FromEventExampleComponent implements AfterViewInit, OnDestroy {

  constructor() { }

  subscriptions: Subscription[] = [];

  ngAfterViewInit(): void {
    const btn = document.querySelector('#btn');

    this.subscriptions.push(
      fromEvent(btn, 'click').subscribe(() => alert('Button clicked'))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item: Subscription) => item.unsubscribe());
  }

}
