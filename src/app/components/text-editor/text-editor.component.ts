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

  editor: Editor;
  toolbar: any = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


  @Input() editMode: boolean = false;
  @Input() section: Section = new Section();
  textSection! : TextSection;
  html: string = "";
  title: string = "";

  constructor() {
    this.editor = new Editor();
  }

  ngOnInit(): void {
    this.editor = new Editor();
    if (this.section instanceof TextSection) {
      this.textSection = new TextSection();
      this.textSection.setData(this.section);
      
      this.title = this.textSection.getTitle();
      this.html = this.textSection.getText();
    } else {
      throw new Error('Wrong section type input');
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
