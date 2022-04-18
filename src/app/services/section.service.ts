import { Injectable } from '@angular/core';
import { Section } from '../interfaces/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  sections : Section[];

  constructor() { 
    this.sections = this.getSections();
  }

  getSections() {
    return [];
  }
}
