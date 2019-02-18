import { Component, OnInit, Input, Output,ViewChild,AfterViewInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  array : any [];
  constructor() { }

  @Input() card ;
  @Output() child=new EventEmitter ();
  // parent message : true;
  ngOnInit() {

  }
  

}
