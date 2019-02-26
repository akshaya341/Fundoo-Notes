import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../service/note-service.service';
import { SearchService } from '../../service/searchService/search.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   arrayCard: any[];
   Search: any;
  destroy$: Subject<boolean> = new Subject<boolean>(); 
  constructor(private noteService : NoteServiceService, private data: SearchService ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.Search = message;
    })
    this.getNotes();
  }
  getNotes() {
   this.noteService.getcard()
   .pipe(takeUntil(this.destroy$))  
    .subscribe(data => {
        this.arrayCard = [];
       
        for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
          if (data["data"]['data'][i].isDeleted == false &&
          data["data"]['data'][i].isArchived == false) {
          this.arrayCard.push(data["data"]['data'][i])
        }
      }
      console.log("Search card array ",this.arrayCard)
       
      }, error => {
        console.log(error);
      })
    }

    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }
}



