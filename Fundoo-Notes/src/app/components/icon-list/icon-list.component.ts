import { Component, OnInit } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  @Output () MessageEvent = new EventEmitter <string> ();

  recieveMessage($event){
  this.MessageEvent.emit();
  }
}
