import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module'
import { NameService } from '@core/services';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    CoreModule
  ],
  providers: [
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
