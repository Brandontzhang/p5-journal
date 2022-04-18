import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/interfaces/section';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  editMode : boolean;
  section : Section[];

  constructor(public sectionService : SectionService) {
    this.editMode = false;
    this.section = sectionService.getSections();
  }

  ngOnInit(): void {
  }

  edit(event : any) {
    this.editMode = event;
  }

}
