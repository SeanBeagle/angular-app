import { Component, OnInit } from '@angular/core';
import { faCode, faCodeBranch, faFile, faChartLine } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.css']
})
export class ActivityBarComponent implements OnInit {
  faChartLine = faChartLine;
  faCode = faCode;
  faCodeBranch = faCodeBranch;
  faFile = faFile;

  constructor() { }

  ngOnInit(): void {
  }

}
