import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageParent: string;

  changeMessage(): void {
    this.messageParent = 'Message from Oleh';
  }

}
