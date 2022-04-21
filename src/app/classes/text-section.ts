import { Section } from "./section";

export class TextSection extends Section {
  date : Date;
  text : string;

  constructor() {
    super()
    this.date = new Date();
    this.text = ""
  }

  setData(section : TextSection) {

  }
}
