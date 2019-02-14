import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {

  templateDrivenForm = '';
  myControl = new FormControl;

  constructor() { }

  ngOnInit() {
    this.myControl.setValue(`This is contenteditable text for reactive form`);
  }

}
