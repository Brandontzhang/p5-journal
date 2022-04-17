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
    this.month = this.curDay.getUTCMonth();
    this.day = this.curDay.getUTCDate();
    this.year = this.curDay.getUTCFullYear();
    this.displayDate = `${this.month + 1}/${this.day}/${this.year}`;
  }

  setDate(newDate : Date) {
    this.curDay = newDate;
    this.month = this.curDay.getUTCMonth();
    this.day = this.curDay.getUTCDate();
    this.year = this.curDay.getUTCFullYear();
    this.displayDate = `${this.month + 1}/${this.day}/${this.year}`;
  }

  nextDay() {
    let nextDay = new Date(this.year, this.month, this.day + 1);
    this.setDate(nextDay);
  }

  prevDay() {
    let prevDay = new Date(this.year, this.month, this.day - 1);
    this.setDate(prevDay);
  }
  
}
