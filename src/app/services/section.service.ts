import { Injectable } from '@angular/core';
import { Section } from '../classes/section';
import { TextSection } from '../classes/text-section';
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
    let sampleData = [
      {
        id: 1,
        title: "the first text entry here",
        text: "This is the first text entry, lots more text for description value",
        date: new Date()
      },
      {
        id: 2,
        title: "the second text entry here",
        text: "More ydadadadadadadad stuffs here, so very quite boring where my lorem ipsum at",
        date: new Date()
      },
      {
        id: 3,
        title: "the third text entry here",
        text: "lorem ipsum dolor",
        date: new Date()
      },
      new TextSection()
    ]
    return sampleData;
  }
}
