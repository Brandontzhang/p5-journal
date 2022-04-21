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
      new TextSection(),
      new TextSection()
    ]
    return sampleData;
  }
}
