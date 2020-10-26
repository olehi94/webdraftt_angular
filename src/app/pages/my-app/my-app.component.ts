import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent {

  name = 'World';
  isRed = false;
  colorRed: '#ff0000';
  colorBlue: '#0000ff';
  isHalf = true;
  classes = 'class1 class2 class3';

  homePageUrl = 'https://webdraftt.com/tutorial/angular-templates';

  homePageUrlFunction(): string {
    return 'https://webdraftt.com/tutorial/angular-templates';
  }

  printGreeting(name: string = this.name): string {
    return `Hello ${name}`;
  }

  log(e: object): void {
    e.target.style.backgroundColor = 'red';
  }
}
