import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('btn') btnRef: any;
  title = 'webdrafft-angular';

  ngAfterViewInit(): void {
    console.log(this.btnRef.nativeElement);
  }

}
