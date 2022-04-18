import { ListItem } from "./list-item";
import { Section } from "./section";

export interface ListSection extends Section{
  description : string;
  listItems : ListItem[];
}
