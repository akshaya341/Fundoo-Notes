import { Component, OnInit, Input, Output,ViewChild,AfterViewInit } from '@angular/core';
import { NoteServiceService } from "../../service/note-service.service";
import { EventEmitter } from 'events';
import { SearchService } from '../../service/searchService/search.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  cards : any [];
  color : any;
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

  Changescolor($event){
    this.color=$event;
    console.log("received color change event ", this.color);
  }
  
  update(object){
    if(object.type=='delete'){
      let index=this.cards.indexOf(object);
      this.cards.splice(index,1);
    }else(object.type=='color')
    {
      this.getAllCard();
    }
  }
  
  // colorchange(){
  //    this.colorChanges=$event
      
  // }

 
 
}
