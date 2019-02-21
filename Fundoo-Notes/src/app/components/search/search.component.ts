import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../service/note-service.service';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private card: any[];
  private Search: any;
  constructor(private noteService : NoteServiceService, private data: SearchService ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.Search = message;
    })
    this.getNotes();
  }
  getNotes() {
   this.noteService.getcard()
    
    .subscribe(data => {
        this.card = [];
       
        for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
         
            this.card.push(data["data"]['data'][i])
          
        }
       
      }, error => {
        console.log(error);
      })
    }
}
