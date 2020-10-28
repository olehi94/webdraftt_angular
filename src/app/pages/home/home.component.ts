import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name: string;

  @Input() set setName(value) { this.name = value + '_some'; }

  get getName(): string {
    return this.name || 'Unknown';
  }

  getNameWithoutGetter(): string {
    return this.name + '_new';
  }

}
