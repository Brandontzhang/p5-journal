import { Injectable } from '@angular/core';
import { ListSection } from '../classes/list-section';
import { Section } from '../classes/section';
import { TextSection } from '../classes/text-section';
import { ListItem } from '../interfaces/list-item';
import { DateService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  sections : Section[];

  constructor(dateService : DateService) { 
    this.sections = this.getSections(dateService.getDate());
  }

  getSections(date? : Date) {
    let l1 = new ListSection();
    let li1 : ListItem = {id:0, text: "test", listId: 0}
    l1.setListItems([li1]);

    let sampleData = [
      new TextSection(),
      new ListSection(),
      new TextSection(),
      l1
    ]
    return sampleData;
  }
}
