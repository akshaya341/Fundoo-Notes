import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  getNotes(): any {
    throw new Error("Method not implemented.");
  }

  constructor(private httpService : HttpService) { }
  
  postcolor(body){
    return this.httpService.postJSON('/note/changesColorNotes',body)
  }

    getcard(){
         return this.httpService.getHttp('notes/getNotesList');
    }

    postTrash(body){
      return this.httpService.postJSON('notes/trashNotes',body)
    }
}
