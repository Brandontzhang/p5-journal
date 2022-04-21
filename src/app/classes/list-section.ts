import { ListItem } from "../interfaces/list-item";

export class ListSection {
  description : string;
  listItems : ListItem[];

  constructor() {
    this.description = "";
    this.listItems = [];
  }

  setData(section : ListSection) {

  }
}
