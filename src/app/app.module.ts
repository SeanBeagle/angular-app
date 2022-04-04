import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCardComponent } from './list-card/list-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameService } from './services/name.service';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
