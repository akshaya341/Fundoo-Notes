import { Component, OnInit, Input, Output,ViewChild,AfterViewInit } from '@angular/core';
import { NoteServiceService } from "../../service/note-service.service";
import { EventEmitter } from 'events';
import { SearchService } from '../../service/searchService/search.service';
import { ViewchangeService } from '../../service/viewchange.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  cards : any [];
  color : any;
  body :  any;
  trashcards : any [];
  cardsArray : any[];
  noteObject : any;
  colorChanges : any;
  istrash = false;
  flag= false;
  private toggle: any = false;
  noteId: any = "";
  childColor: any = "";
  private subscribeView : boolean;
  constructor(private noteService:NoteServiceService,private data: SearchService, private viewChange:ViewchangeService) { }
  @Input() Search;
   @Input() card;
  @Output() child=new EventEmitter ();
  @Input() arrayCards;
  
   parentmessage : true;
  ngOnInit() {
    this.getAllCard();
    this.getTrashCard();
    this.switchView();
    this.viewChange.subscribeView.subscribe(view =>{
      this.subscribeView = view;
    })
  }

  getAllCard(){
  this.noteService.getcard().subscribe(data=>{
    this.cards=data['data']['data'];
    this.cards.reverse();
     console.log("total cards", this.cards)
     this.trashcards = this.cards.filter(function (el) {
      return (el.isDeleted === true);
  });
     this.cardsArray = this.cards.filter(function (el){
       return (el.isDeleted === false && el.isArchived === false && el.isPined === false)
     }) ;  

   console.log("cards after trashArray",this.trashcards);
   console.log("cards after cardsArray",this.cardsArray);
   
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
    this.getAllCard();
  }

  // colorChange($event){
  //   console.log("recieved event to change card color",$event);
  //   this.childColor = $event
  //   }
  // getNoteId(items){
  //   console.log(items);
  //   this.noteId = items.id;
    
  // }
  // updateCardColor(){
  //   var model : any ;
  //   model={
  //     "color" : this.childColor ,
  //     "id" : this.noteId
  //   }
  //   this.noteService.postcolor(model).subscribe(color =>{
  //     console.log(color.message);
  //   })
  // }
  getTrash(){
  this.flag= !this.flag ;
  }

  switchView() {
    {
      this.data.viewList.subscribe(message => {
        this.toggle = message;
      })
    }
  }

  getTrashCard(){
   
    this.noteService.getTrash().subscribe(data => {
      this.trashcards= data['data']['data'];
      this.trashcards.reverse();
      console.log("trash cards ", this.trashcards);
    },
    err =>{
      console.log(err);
    }
    )
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

  
  


 
 
}
