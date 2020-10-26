import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppComponent } from './pages/my-app/my-app.component';
import { FromEventExampleComponent } from './pages/from-event-example/from-event-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    FromEventExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
