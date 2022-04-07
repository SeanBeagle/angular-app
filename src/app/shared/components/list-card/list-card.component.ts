import { Component, OnInit, Input} from '@angular/core';
import { NameService } from '@core/services/name.service'


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit{
  @Input() title: string = "";
  
  names: string[] = [];
  newName:string = "";

  constructor(private nameService: NameService){}

  ngOnInit(): void {
    this.names = this.nameService.getNames()
  }

  onAddName(): void {
    if (this.newName != "") {
      this.nameService.addName(this.newName);
      this.newName = "";
    }
  }
}
