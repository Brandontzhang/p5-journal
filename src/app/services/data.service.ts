import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  curDay : Date;
  month : number;
  day : number;
  year : number;
  displayDate : string;

  constructor() {
    this.curDay = new Date();
    this.month = this.curDay.getUTCMonth() + 1;
    this.day = this.curDay.getUTCDate();
    this.year = this.curDay.getUTCFullYear();
    this.displayDate = `${this.month}/${this.day}/${this.year}`;
  }

  nextDay() {
    this.day += 1;
    this.displayDate = `${this.month}/${this.day}/${this.year}`;
  }

  prevDay() {
    this.day -= 1;
    this.displayDate = `${this.month}/${this.day}/${this.year}`;
  }
  
}
