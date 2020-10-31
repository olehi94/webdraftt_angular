import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webdrafft-angular';

  cars: any[] = [
    {name: 'Audi', year: 2018},
    {name: 'BMW', year: 2015},
    {name: 'Mercedes', year: 2016}
  ];

  car = 'Ford';

  elementStyles: any = {
    color: 'green',
    opacity: 0.5
  };
}
