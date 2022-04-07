import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from '@shared/components'


@NgModule({
  declarations: [
    ListCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListCardComponent
  ]
})
export class SharedModule { }
