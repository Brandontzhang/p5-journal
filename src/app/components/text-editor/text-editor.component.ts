import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnDestroy{
  
  editor!: Editor;
  html: string;

  constructor() {
    this.html = "asdasdasdasdd";
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
