import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-datebar',
  templateUrl: './datebar.component.html',
  styleUrls: ['./datebar.component.scss']
})
export class DatebarComponent implements OnInit {

  displayDate : string;

  constructor(public dateService : DataService) {
    this.displayDate = dateService.displayDate;
  }

  ngOnInit(): void {
  }

  nextDay() {
    this.dateService.nextDay();
    this.displayDate = this.dateService.displayDate;
  }

  prevDay() {
    this.dateService.prevDay();
    this.displayDate = this.dateService.displayDate;
  }

}
