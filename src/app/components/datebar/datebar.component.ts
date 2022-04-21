import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/data.service';

@Component({
  selector: 'app-datebar',
  templateUrl: './datebar.component.html',
  styleUrls: ['./datebar.component.scss']
})
export class DatebarComponent implements OnInit {

  displayDate : string;

  constructor(public dateService : DateService) {
    this.displayDate = dateService.displayDateText();
  }

  ngOnInit(): void {
  }

  nextDay() {
    this.dateService.nextDay();
    this.displayDate = this.dateService.displayDateText();
  }

  prevDay() {
    this.dateService.prevDay();
    this.displayDate = this.dateService.displayDateText();
  }

}
