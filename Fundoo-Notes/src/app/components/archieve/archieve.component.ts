import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { NoteServiceService } from '../../service/note-service.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {

  ngOnInit() {
   this.getunPinnedArchiveNotes();

  }
  private  unPinData : any=[];
  flag=true;
  message= "";
  action = "Undo ";
  result = "Action Undone";
  constructor(private snackBar: MatSnackBar, private notesService: NoteServiceService) {}

  
  reverseFlag(){
    this.flag == !this.flag;
  }
  getunPinnedArchiveNotes() {
    this.notesService.getArchiveNotes().subscribe(data => {
        for (var i = 0; i < data["data"]['data'].length; i++) {
          if(data["data"]['data'][i].isPined == false &&
          data["data"]['data'][i].isDeleted == false ){
            this.unPinData = (data["data"]['data']);
          }
        }
      }, error => {
        console.log("getunPinnedArchiveNotes", error);
        
      })
  }
 
}
