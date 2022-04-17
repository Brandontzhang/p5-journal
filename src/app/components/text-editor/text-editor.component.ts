import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnDestroy{
  
  editor: Editor;
  html: string;
  editMode: boolean;
  title: string;

  constructor() {
    this.html = "hi";
    this.editor = new Editor();
    this.editMode = false;
    this.title = "New Section";
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  edit() {
    this.editMode = !this.editMode;
  }

}
