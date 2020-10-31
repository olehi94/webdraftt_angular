import { Component } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private dataService: DataService) {
    console.log(dataService.data);
    dataService.data = 3;
  }

}
