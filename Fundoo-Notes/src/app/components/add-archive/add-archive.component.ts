import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteServiceService } from '../../service/note-service.service';

@Component({
  selector: 'app-add-archive',
  templateUrl: './add-archive.component.html',
  styleUrls: ['./add-archive.component.scss']
})
export class AddArchiveComponent implements OnInit {
  @Input() archive;
  @Output() archiveEmit = new EventEmitter();
  constructor(private notesService : NoteServiceService ) { }

 
  ngOnInit() {
  }
 
  addArchive() {
    this.notesService.postArchive({
      "isArchived": true,
      "noteIdList": [this.archive.id]
    })
    
    .subscribe(data => {
      this.archiveEmit.emit({
      })
    })
  }

  unArchive() {
    this.notesService.postArchive({
      "isArchived": false,
      "noteIdList": [this.archive.id]
    })
    .subscribe(data => {
      this.archiveEmit.emit({
      })
    })
  }

}
