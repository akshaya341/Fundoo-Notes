import { Component, OnInit, Input } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';
import { NoteServiceService } from '../../service/note-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
 
  private accessToken = localStorage.getItem('token');
  constructor(private noteService:NoteServiceService,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  @Input() color;
    @Output() colorEmit = new EventEmitter();
    @Output() colorchange = new EventEmitter();
  
  colorArray =[[{'color' : '#FFFFFF','name' : 'White'},
{'color' : '#E53935','name':'Red'},
{'color' : '#EF6C00', 'name' : 'Orange'},
{'color' : '#FFEB3B', 'name':'Yellow'}],

[{'color': '#B2FF59', 'name': 'green'},
{'color':'#69F0AE', 'name':'teal'},
{'color': '#81D4FA', 'name':'blue'},
{'color':'#0288D1','name':'darkblue'}],

[{'color':'#B39DDB','name':'purple'},
{'color':'#F48FB1','name':'pink'},
{'color':'#FFAB40','name':'brown'},
{'color':'#E0E0E0','name': 'gray'}

]]

colorEdit(id){
  this.color.colorEvent.emit(id)
  if(this.color !=undefined){
    this.noteService.postcolor({
     "color":id,
     "noteIdList":[this.color.id]
    }).subscribe(data =>{
      localStorage.setItem('colorId',this.color.id)
      this.colorchange.emit({

      })
    })
  }
}

@Output () deleteEvent = new EventEmitter();
// @Input () delete;

deleteNote(){
  console.log('deletino');
  
   this.deleteEvent.emit();
}

message = "Note Archieved ";
action = "Undo";

archive(message: string,  action : string){
    this.snackBar.open(this.message, this.action), {
      duration : 4000
    }
}

}










