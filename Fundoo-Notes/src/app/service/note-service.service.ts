import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpService : HttpService) { }

  postcolor(body){
    return this.httpService.postJSON('/note/changesColorNotes',body)
  }

    getcard(){
         return this.httpService.getHttp('notes/getNotesList');
    }
}
