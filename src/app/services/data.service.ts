import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private curDay : Date;
  private month : number;
  private day : number;
  private year : number;
  private displayDate : string;

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

  displayDateText() {
    return this.displayDate
  }

  getDate() {
    return this.curDay;
  }
  
}
