import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCardComponent } from '@shared/components';
import { NavbarComponent } from '@core/components';
import { NameService } from '@core/services';

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
