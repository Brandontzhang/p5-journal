import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Editor } from 'ngx-editor';
import { ListSection } from 'src/app/classes/list-section';
import { Section } from 'src/app/classes/section';
import { TextSection } from 'src/app/classes/text-section';
import { ListItem } from 'src/app/interfaces/list-item';

@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.scss']
})
export class ListEditorComponent implements OnInit, OnDestroy{
  
  @Input() editMode!: boolean;

  @Input() section!: Section;

  textSection! : TextSection;
  listSection! : ListSection;

  title: string = "";
  description!: string;
  listItems!: ListItem[];

  constructor() {
  }

  ngOnInit(): void {

    if (this.section instanceof ListSection) {
      this.listSection = new ListSection();
      this.listSection.setData(this.section);

      this.title = this.listSection.getTitle();
      this.description = this.listSection.getDescription();
      this.listItems = this.listSection.getListItems();
    } else {
      throw new Error('Wrong section type input');
    }
  }

  ngOnDestroy(): void {

  }

}
