import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './pages/child/child.component';
import { ParentComponent } from './pages/parent/parent.component';
import { SomeComponent } from './pages/some/some.component';
import { SomeDirective } from './pages/some/some.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    SomeComponent,
    SomeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
