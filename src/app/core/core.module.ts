import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent, FooterComponent, CoreComponent } from '@core/components';
import { ListCardComponent } from '@shared/components';
import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CoreComponent,
    ActivityBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    CoreComponent,
  ]
})
export class CoreModule { }
