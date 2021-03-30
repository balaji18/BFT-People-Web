import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-manual',
  templateUrl: './add-manual.component.html',
  styleUrls: ['./add-manual.component.css']
})
export class AddManualComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
