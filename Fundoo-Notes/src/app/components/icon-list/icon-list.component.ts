import { Component, OnInit, Input } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';
import { NoteServiceService } from '../../service/note-service.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
 
  
  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
  }

  @Output () colorEvent = new EventEmitter  ();
  @Output() colorchange = new EventEmitter();
  @Input() color 
  // colorHit($event){
  // this.MessageEvent.emit();
  // }
  
  colorArray =[[{'color' : '#FFFFFF','name' : 'White'},
{'color' : '','name':'Red'},
{'color' : '', 'name' : 'Orange'},
{'color' : '', 'name':'Yellow'}],

[{'color': '', 'name': 'green'},
{'color':'', 'name':'teal'},
{'color': ' ', 'name':'blue'},
{'color':'','name':'darkblue'}],

[{'color':'','name':'purple'},
{'color':'','name':'pink'},
{'color':'','name':'brown'},
{'color':'','name': 'gray'}

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
}
