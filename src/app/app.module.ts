import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksExampleComponent } from './pages/hooks-example/hooks-example.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { ContactsItemComponent } from './pages/contacts-item/contacts-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksExampleComponent,
    ContactsListComponent,
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
