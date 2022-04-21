import { ListItem } from "../interfaces/list-item";
import { Section } from "./section";

export class ListSection extends Section {
  description : string;
  listItems : ListItem[];

  constructor() {
    super()
    this.description = "";
    this.listItems = [];
  }

  setData(section : ListSection) {
    this.id = section.id;
    this.title = section.title;
    this.description = section.description;
    this.listItems = section.listItems;
  }

  getDescription() {
    return this.description;
  }

  setDescription(desc : string) {
    this.description = desc;
  }

  getListItems() {
    return this.listItems;
  }

  setListItems(listItems : ListItem[]) {
    this.listItems = listItems;
  }
}
