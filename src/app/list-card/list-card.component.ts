import { Component } from '@angular/core';
import { NameService } from '../services/name.service'

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})

export class ListCardComponent {
  title = 'Names';
  message = 'Hello Yall';
  names = this.nameService.getNames();
  newName:string = "";

  constructor(private nameService: NameService){}

  onAddName(): void {
    if (this.newName != "") {
      this.nameService.addName(this.newName);
      this.newName = "";
    }
  }
}
