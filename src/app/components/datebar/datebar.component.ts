import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-datebar',
  templateUrl: './datebar.component.html',
  styleUrls: ['./datebar.component.scss']
})
export class DatebarComponent implements OnInit {

  curDay : Date;
  month : number;
  day : number;
  year : number;
  displayDate : string;

  constructor(public dateService : DataService) {
    this.curDay = dateService.curDay;
    this.month = dateService.month;
    this.day = dateService.day;
    this.year = dateService.year;
    this.displayDate = dateService.displayDate;
  }

  ngOnInit(): void {
  }



}
