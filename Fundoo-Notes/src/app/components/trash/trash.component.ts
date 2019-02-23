import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../service/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashcards : any[]

  constructor( private noteService : NoteServiceService) { }

  ngOnInit() {
    this.getTrashCard();
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

}
