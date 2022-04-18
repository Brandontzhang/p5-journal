import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  @Output()
  editMode : EventEmitter<boolean> = new EventEmitter();

  editting: boolean;
  
  constructor() {
    this.editting = false;
  }

  ngOnInit(): void {
  }

  addSection() {
    
  }

  edit() {
    this.editting = !this.editting;
    this.editMode.emit(this.editting);
  }

}
