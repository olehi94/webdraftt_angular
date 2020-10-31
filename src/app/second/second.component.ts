import { Component } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  constructor(private dataService: DataService) {
    console.log(dataService.data);
  }

}
