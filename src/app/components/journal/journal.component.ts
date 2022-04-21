import { Component, OnInit } from '@angular/core';
import { ListSection } from 'src/app/classes/list-section';
import { Section } from 'src/app/classes/section';
import { TextSection } from 'src/app/classes/text-section';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  editMode : boolean;
  sections : Section[];

  constructor(public sectionService : SectionService) {
    this.editMode = false;
    this.sections = sectionService.getSections();
  }

  ngOnInit(): void {
  }

  edit(event : any) {
    this.editMode = event;
  }

  isTextSection(section : Section) {
    return section instanceof TextSection;
  }

}
