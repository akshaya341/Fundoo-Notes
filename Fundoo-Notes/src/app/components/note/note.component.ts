import { Component, OnInit, Input, Output,ViewChild,AfterViewInit } from '@angular/core';
import { NoteServiceService } from "../../service/note-service.service";
import { EventEmitter } from 'events';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  card : any [];
  constructor(private noteService:NoteServiceService) { }

  @Output() child=new EventEmitter ();
   parentmessage : true;
  ngOnInit() {
    this.getAllCard();

  }
  getAllCard(){
  this.noteService.getcard().subscribe(data=>{
    
    this.card=data['data']['data'];
    this.card.reverse();
    console.log('card ',this.card)
  },err=>{
    console.log(err);
  })
    
  }
  

}
