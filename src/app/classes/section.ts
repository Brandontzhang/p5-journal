export class Section {
  id : number;
  title : string;

  constructor() {
    this.id = 0;
    this.title = "Section title";
  }
  
  getTitle() {
    return this.title;
  }

  setTitle(title : string) {
    this.title = title;
  } 
}
