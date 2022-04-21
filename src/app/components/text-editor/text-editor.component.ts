import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Editor } from 'ngx-editor';
import { ListSection } from 'src/app/classes/list-section';
import { Section } from 'src/app/classes/section';
import { TextSection } from 'src/app/classes/text-section';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnDestroy{
  
  @Input()
  editMode: boolean = false;
  @Input()
  section!: Section;
  textSection! : TextSection;
  listSection! : ListSection;

  editor: Editor;
  html: string = "";
  title: string = "";

  constructor() {
    this.editor = new Editor();

    if (this.section instanceof TextSection) {
      this.textSection = new TextSection();
      this.textSection.setData(this.section);
    }

    if (this.section instanceof ListSection) {
      this.listSection = new ListSection();
      this.listSection.setData(this.section);
    }
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
