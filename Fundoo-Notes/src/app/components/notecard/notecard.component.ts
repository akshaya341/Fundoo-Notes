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
  color : any;
  constructor() { }

  ngOnInit() {
    this.myControl.setValue(`This is contenteditable text for reactive form`);
  }
  
  Changes($event){
    this.color=$event;
    console.log("received color change event ", this.color);
  }
}
