import { DateService } from "../services/data.service";
import { Section } from "./section";

export class TextSection extends Section {
  date : Date;
  text : string;

  dateService : DateService;

  constructor() {
    super()
    this.dateService = new DateService();

    this.date = this.dateService.getDate();
    this.text = ""
  }

  setData(section : TextSection) {
    this.id = section.id;
    this.title = section.title;
    this.date = section.date;
    this.text = section.text;
  }

  getDate() {
    return this.date;
  }

  getText() {
    return this.text;
  }
}
