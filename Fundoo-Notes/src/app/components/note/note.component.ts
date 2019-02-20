import { Component, OnInit, Input, Output,ViewChild,AfterViewInit } from '@angular/core';
import { NoteServiceService } from "../../service/note-service.service";
import { EventEmitter } from 'events';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  cards : any [];
  body :  any;
  noteObject : any;
  colorChanges : any;
  constructor(private noteService:NoteServiceService,private data: SearchService) { }
  @Input() Search;
   @Input() card;
  @Output() child=new EventEmitter ();
   parentmessage : true;
  ngOnInit() {
    this.getAllCard();

  }
  getAllCard(){
  this.noteService.getcard().subscribe(data=>{
    
    this.cards=data['data']['data'];
    this.cards.reverse();
     this.noteObject=this.cards;
   
    console.log('card ',this.cards);
    console.log('responce data',data);
    // console.log("user id ---", this.body);
  },err=>{
    console.log(err);
  })
    
  }

  colorcode(){

  }
  
  deleteCard(noteObject) {
    console.log("note object",noteObject);
    
    this.noteService.postTrash(
    {
    "isDeleted": true,
    "noteIdList": [noteObject.id]
    }).subscribe(data => {
    console.log("trash responce",data);
    // this.childObject.emit(noteObject);
    }, err => {
    console.log("delete responance",err);
    })
    }
  
  colorchange($event){
     this.colorChanges=$event
      
  }
 
}
