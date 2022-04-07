import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent, FooterComponent, CoreComponent } from '@core/components';
import { ListCardComponent } from '@shared/components';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CoreComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CoreComponent,
  ]
})
export class CoreModule { }
