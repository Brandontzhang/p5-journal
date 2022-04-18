import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  editMode : boolean;

  constructor() {
    this.editMode = false;
  }

  ngOnInit(): void {
  }

  edit(event : any) {
    this.editMode = event;
  }

}
