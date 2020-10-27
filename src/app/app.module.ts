import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppComponent } from './pages/my-app/my-app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactsItemComponent } from './pages/contacts-item/contacts-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    ContactsComponent,
    ContactsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
